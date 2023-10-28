import styles from './login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '..//..//assets//earth_share_logo.svg'

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function goToRegister () {
        navigate("/register")
    }

    function goToResetPassword () {
        navigate("/reset-password")
    }

    const handleChange = (event) => {
        if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "password") {
            setPassword(event.target.value)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        }).then(response => response.json()).then(data => {
            if (data.statusCode !== 401) {
                localStorage.setItem("accessToken", data.access_token)
                navigate("/mainpage")
            } else {
                alert("Invalid credentials");
                setEmail("")
                setPassword("")
            }
        }).catch(error => { console.log(error) })
    }

    return (
        <>
            <div className={styles.loginMainContainer}>
                <div className={styles.login_container}>
                <div className={styles.headerLogin}>
                        <img src={logo}></img>
                        <h2>ResourceWise.com</h2>
                    </div>
                    <h3> Login </h3>
                    <h3> Email </h3>                            
                    <input type="text" id="email" className={styles.credentialsLogin} value={email} onChange={handleChange} autoComplete="off"></input>
                    <h3> Password </h3>
                    <input type="password" id="password" className={styles.credentialsLogin} value={password} onChange={handleChange} autoComplete="off"></input>
                    <button id={styles.login_button} onClick={handleLogin} > Log In </button>
                    <p onClick={goToResetPassword}> Forgot your password? </p>
                    {/* <div className={styles.register_container}> */}
                    <p onClick={goToRegister}> Register </p>
                    {/* </div> */}
                </div>

            </div>
        </>
    )
}

export default Login