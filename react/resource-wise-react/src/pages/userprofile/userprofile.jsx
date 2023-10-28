import { useEffect, useState } from 'react';
import styles from './style.module.css'

function UserProfile () {
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/auth/my-profile`, {
            method: "GET",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then((response) => response.json())
            .then((data) => setUser(data.user))
    }, [])

    return (
        <>
            <div className={styles.userMain}>
                <div className={styles.userContainer}>
                    <h1>Welcome {user.email} </h1>
                    <p>Your earned points: {user.points}</p>
                </div>
            </div>
        </>
    )
}

export default UserProfile