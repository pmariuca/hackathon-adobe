import { useEffect } from 'react';
import styles from './style.module.css'

function UserProfile(props){

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${1}`, {
            method: "GET",
            headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
    
        }).then((response) => response.json())
        .then((data) => console.log(data))
    }, [])

    return (
        <>
            <div className={styles.userMain}>
                <div className={styles.userContainer}>
                    <h1> User: {props.userEmail} </h1>
                </div>        
            </div>
        </>
    )
}

export default UserProfile