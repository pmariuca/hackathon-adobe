import { useEffect, useState } from 'react';
import styles from './style.module.css'
import Navbar from '../../components/navbar/navbar';

function UserProfile () {
    const [level,setLevel]=useState(0)
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


        let lvlList = ["Initiate","Eco-Initiator", "Green Crusader", "Eco Warrior", "Sustainability Champion", "Planet Protector"]
        setLevel(lvlList[user.points])    
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.userMain}>
                <div className={styles.userContainer}>
                    <h1>Welcome {user.email} </h1>
                    <p>Your earned points: {user.points}</p>
                    <p id="level"> Your level is: {level} </p>
                </div>
            </div>
        </>
    )
}

export default UserProfile