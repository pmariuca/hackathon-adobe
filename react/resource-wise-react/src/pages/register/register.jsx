import styles from './register.module.css'

import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate();    

    function reg(){

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value

        if (password.value != confirmPassword.value)
            alert('Passwords do not match!')
        else {
            fetch('http://localhost:3000/auth/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({email: email, password: password})
            }).then(response => {
                if (response.ok) {
                    // the user was created

                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                    // localStorage.setItem("id", )
                    navigate("/login")

                } else {
                    alert(response.status)
                }
            })
            .then(data => {
                console.log(data); // Handle the response data here
            })
            .catch(error => {
                console.log(error); // Handle errors here
            });
        }
    }

    return (
        <>
            <div className={styles.regMainContainer}>
                <div className={styles.reg_container}>
                    <h1> ChatterSphere Login </h1>
                    <h2> Email </h2>
                    <input type="text" id="email"></input>
                    <h2> Password </h2> 
                    <input type="text" id="password"></input>
                    <h2> Confirm Password </h2> 
                    <input type="text" id="confirmPassword"></input>

                    <button id={styles.reg_button} onClick={reg}> Register </button>
                </div>  
            </div>
        </>
    )
}

export default Register