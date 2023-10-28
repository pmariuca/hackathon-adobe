import { useEffect } from 'react';
import styles from './login.module.css'

import React from 'react';

import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();    

    function goToRegister() {
        navigate("/register")
    }


    return (
        <>
        <div className={styles.loginMainContainer}>

            <div className={styles.login_container}>
                <h1> ChatterSphere Login </h1>
                <h2> Email </h2>
                <input type="text" id={styles.credentialsLogin}></input>
                <h2> Password </h2> 
                <input type="text" id={styles.credentialsLogin}></input>

                <button id={styles.login_button}> Log In </button>

                <p> Forgot your password? </p>

                {/* <div className={styles.register_container}> */}
                <p onClick={goToRegister}> Register </p>
                {/* </div> */}
            </div>

        </div>
        </>
    )
}

export default Login