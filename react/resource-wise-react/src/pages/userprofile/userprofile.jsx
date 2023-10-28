import { useEffect, useState } from 'react';
import styles from './style.module.css'
import Navbar from '../../components/navbar/navbar';

function UserProfile () {
    const [rankings,setRankings]=useState([])
    const [user, setUser] = useState({})
    let lvlList = ["Initiate","Eco-Initiator", "Green Crusader", "Eco Warrior", "Sustainability Champion", "Planet Protector"]
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
            .catch((err)=>console.log(err))

        fetch('http://localhost:3000/users',{
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((response) => response.json())
        .then((data) => setRankings(data))
        .catch((err)=>console.log(err))
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.userMain}>
                <div className={styles.userContainer}>
                    <h1>Welcome {user.email} </h1>
                    <p>Your earned points: {user.points}</p>
                    <p> Your level is: {lvlList[user.points]} </p>
                </div>


                <div className={styles.rankingContainer}>
                    <h2> Rankings: </h2>
                    <ul>
                    {rankings.sort((x,y)=>y.points-x.points).map(rank=>(
                        <li>{rank.email} -{lvlList[rank.points]} - {rank.points} points </li>                 
                    ))}
                </ul>
                </div>
            </div>
        </>
    )
}

export default UserProfile