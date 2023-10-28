import styles from './login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                    <h1> Login </h1>
                    <h2> Email </h2>
                    <input type="text" id="email" className={styles.credentialsLogin} value={email} onChange={handleChange} autoComplete="off"></input>
                    <h2> Password </h2>
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