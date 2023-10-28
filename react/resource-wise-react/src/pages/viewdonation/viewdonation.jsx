import { useEffect, useState } from "react"

function ViewDonation () {
    const [isLoading, setIsLoading] = useState(true)
    const [donation, setDonation] = useState({})
    useEffect(() => {
        fetch('http://localhost:3001/posts/1')
            .then(response => response.json())
            .then(data => { setDonation(data); setIsLoading(false) })
            .catch(error => { console.log(error); setIsLoading(false) })
    }, [])
    return (
        <>
            <h1> view donation page </h1>
            {isLoading && <h1> Loading... </h1>}
            {!isLoading && (
                <div>
                    <h1> {donation.title} </h1>
                    <p> {donation.content}</p>
                    <p>Posted by:{donation.author}</p>
                </div>
            )}
        </>
    )
}

export default ViewDonation