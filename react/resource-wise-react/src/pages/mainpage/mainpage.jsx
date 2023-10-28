import styles from './mainpage.module.css'
import Donation from '../../components/donation/Donation.jsx'
import Navbar from '../../components/navbar/navbar'
import { useEffect, useState } from 'react'

function MainPage () {
    const [isLoading, setIsLoading] = useState(true);
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts', {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        })
            .then(response => response.json())
            .then(data => { setDonations(data); setIsLoading(false); })
            .then(() => setDonations([{ id: 1, title: 'test', author: 'test', content: 'test' }]))
            .catch(err => { console.log(err); setIsLoading(false) });
    }, []);
    return (
        <>
            <Navbar />
            <div className={styles.maincontainer}>
                {isLoading && <p> Loading... </p>}
                <h1> main page </h1>
                {donations && donations.length > 0 ? (
                    donations.map((donation) => (
                        <Donation key={donation.id} donation={donation} />
                    ))) : (<p> No donations yet </p>)
                }
            </div>
        </>
    )
}

export default MainPage