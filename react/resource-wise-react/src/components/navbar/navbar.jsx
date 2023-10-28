import styles from './styles.module.css'
import logo from '..//..//assets/user_logo.png'

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();    

    function goToDonate() {
        navigate("/newdonation")
    }

    function goToProfile(){
        navigate("/userprofile")
    }

    return (
        <>
            <div className={styles.navbar}>
                <input type="text" id={styles.search_donation} placeholder='search donation'></input>
                <div className={styles.navcontainer}> 

                    <li onClick={goToDonate}> Donation </li>
                    
                    <img id={styles.user} src={logo} onClick={goToProfile}></img>
                </div>
            </div>
        </>
    )
}

export default Navbar