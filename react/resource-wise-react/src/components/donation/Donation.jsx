import { useNavigate } from 'react-router-dom'
import styles from './donation.module.css'

function Donation (props) {
    const { donation } = props;
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.donationContainer}>
                <h1> {donation.title} </h1>
                <p> by author {donation.author} </p>
                <p> Donation description: </p>
                <p> {donation.content}  </p>
                <button onClick={() => navigate(`/donations/${donation.id}`)}>See more details</button>
            </div>
        </>
    )
}

export default Donation