import styles from './styles.module.css'
import logo from '..//..//assets/user_logo.png'

import { Navigate } from "react-router-dom";
import { useState } from 'react';

import React from 'react';

function Navbar() {
    const [goToDonate, setGoToDonate] = React.useState(false)
    const [goToProfile, setGoToProfile] = React.useState(false)
    

    if (goToDonate){
        return <Navigate to="/newdonation"/>
    }

    if (goToProfile){
        return <Navigate to="/userprofile"/>
    }


    return (
        <>
            <div className={styles.navbar}>
                <input type="text" id={styles.search_donation} placeholder='search donation'></input>
                <div className={styles.navcontainer}> 

                    <li onClick={()=>{setGoToDonate(true)}}> Donation </li>
                    
                    <img id={styles.user} src={logo} onClick={()=>{setGoToProfile(true)}}></img>
                </div>
            </div>
        </>
    )
}

export default Navbar