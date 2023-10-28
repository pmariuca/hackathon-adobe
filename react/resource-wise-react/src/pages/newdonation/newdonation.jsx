import styles from './newdonation.module.css'

import { useNavigate } from 'react-router-dom'

function NewDonation () {

    const navigate = useNavigate()


    function postDonation () {
        let title = document.getElementById("donationTitle").value
        let content = document.getElementById("donationContent").value


        if (title.trim() === '')
            alert('Please insert the title')
        else if (content.trim() === '')
            alert('Please insert the content')
        else {
            fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ title: title, content: content, published: true })
            }).then(response => {
                if (response.ok) {
                    navigate("/mainpage")

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
            <div className={styles.newDonMain}>
                <div className={styles.newDonContainer}>
                    <div className={styles.newDonRow}>
                        <h3> Title </h3>
                        <input type="text" id="donationTitle" autoComplete="off"></input>
                    </div>

                    <div className={styles.newDonRow}>
                        <h3> Description </h3>
                        <input type="text" id="donationContent" autoComplete="off"></input>
                    </div>

                    <div className={styles.newDonRow}>
                        <button id={styles.saveDonation} onClick={postDonation}> Save Post </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDonation