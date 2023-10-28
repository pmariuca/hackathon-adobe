import styles from './register.module.css'

function Register() {

    function reg(){

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const confirmPassword = document.getElementById("confirmPassword").value

        if (password.value != confirmPassword.value)
            alert('Passwords do not match!')
        else {
            fetch('http://localhost:3000/auth/register', {
                method: "POST",
                body: JSON.stringify({email: email, password: password})
            })
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