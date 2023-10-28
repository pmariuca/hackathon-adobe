import styles from './donation.module.css'

function Donation(props) {
    return (
        <>
            <div className={styles.donationContainer}>
                <h1> {props.title} </h1>
                <p> by author {props.author} </p>
                <p> Donation description: </p>
                <p> {props.description}  </p>
            </div>
        </>
    )
}

export default Donation