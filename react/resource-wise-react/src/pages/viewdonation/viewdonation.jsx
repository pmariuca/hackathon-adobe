import style from './styles.module.css'
import Navbar from '../../components/navbar/navbar'
import { useEffect, useState } from "react"

function ViewDonation () {
    const [isLoading, setIsLoading] = useState(true)
    const [donation, setDonation] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${window.location.pathname.split("/")[2]}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.statusCode !== 404) {
                    setDonation(data.post); setIsLoading(false)
                } else {
                    setDonation({}); setIsLoading(false)
                }
            })
            .catch(error => { console.log(error) })
    }, [])
    
    return (
        <>
        <Navbar/>
        <div className={style.viewDonationMain}>
        <div className={style.viewDonationContainer}>
            <h1> Post details </h1>
            {isLoading && <h1> Loading... </h1>}
            {!isLoading && Object.keys(donation).length !== 0 ? (
                <div>
                    <h1> {donation.title} </h1>
                    <div className={style.authorHeader}>
                        <p> Author:  {donation.author.split('@')[0]} </p>
                        <p> Contact: {donation.author} </p>
                    </div>
                    <p> Description:  </p>
                    <p> "{donation.content}"</p>
                    
                </div>
            ) : (
                <h1> Donation not found </h1>
            )}
        </div>
        </div>
        </>
    )
}

export default ViewDonation