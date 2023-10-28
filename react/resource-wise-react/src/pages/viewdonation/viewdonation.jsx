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
            {isLoading && <h1> Loading... </h1>}
            {!isLoading && Object.keys(donation).length !== 0 ? (
                <div>
                    <h1> {donation.title} </h1>
                    <p> {donation.content}</p>
                    <p>Posted by:{donation.author}</p>
                </div>
            ) : (
                <h1> Donation not found </h1>
            )}
        </>
    )
}

export default ViewDonation