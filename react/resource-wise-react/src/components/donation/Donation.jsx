import { useNavigate } from 'react-router-dom'
import styles from './donation.module.css'

function Donation (props) {
    const { donation } = props;
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.donationContainer} onClick={() => navigate(`/donations/${donation.id}`)}>
                <h1> {donation.title} </h1>
                <p> by author {donation.author} </p>
                <p> Donation description: </p>
                <p> {donation.content}  </p>
            </div>
        </>
    )
}

export default Donation