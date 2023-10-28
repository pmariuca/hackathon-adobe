import styles from './newdonation.module.css'

function NewDonation() {
    return (
        <>
        <div className={styles.newDonMain}>
            <div className={styles.newDonContainer}>
                <div className={styles.newDonRow}>
                    <h3> Title </h3>
                    <input type="text"></input>
                </div>

                <div className={styles.newDonRow}>
                    <h3> Description </h3>
                    <input type="text"></input>
                </div>

                <div className={styles.newDonRow}>
                    <button id={styles.saveDonation}> Save Post </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewDonation