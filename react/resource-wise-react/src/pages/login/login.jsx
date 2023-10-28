import { useEffect } from 'react';
import styles from './login.module.css'

function Login(){

    useEffect(() => {
    const doc = document.getElementsByTagName("input");

    window.addEventListener('click', handleclick);
    
    function handleclick(e) {
        for(let i=0;i<doc.length;i++)
            doc[i].classList.remove("input_click");
        if (e.target.matches("input")){
            e.target.classList.add("input_click");
        }
        }
    })

    return (
        <>
        <div class={styles.login_container}>
            <h1> ChatterSphere Login </h1>
            <h2> Email </h2>
            <input type="text"></input>
            <h2> Password </h2> 
            <input type="text"></input>

            <a href="forgot_password.html"> Forgot your password? </a>

            <button id="login_button" onclick="window.location.href='html/join_room.html'"> Log In </button>

            <div class={styles.register_container}>
                <p> Need an account? </p>
                <a href="html/register.html"> Register </a>
            </div>
            
        </div>
        
        </>
    )
}

export default Login