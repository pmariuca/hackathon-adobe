import styles from './mainpage.module.css'
import Donation from '../../components/donation/Donation.jsx'
import Navbar from '../../components/navbar/navbar'

function MainPage(){
    return (
        <>
            <Navbar />
            <div className={styles.maincontainer}>
                <h1> main page </h1>
                <Donation title="donez mancare" author="robert" description="donez mancare la amarati"/>
            </div>
        </>
    )
}

export default MainPage