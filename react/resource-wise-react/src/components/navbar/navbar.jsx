import styles from './styles.module.css'
import logo1 from '..//..//assets/earth_share_logo.svg'
import logo2 from '..//..//assets/user_logo.png'
import { useNavigate } from 'react-router-dom';

function Navbar () {
    const navigate = useNavigate();

    function goToDonate () {
        navigate("/newdonation")
    }

    function goToProfile () {
        navigate("/userprofile")
    }

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    }

    return (
        <>
            <div className={styles.navbar}>
                {/* <input type="text" className={styles.search_donation} id="searchInput" placeholder='search donation'></input> */}
                <div className={styles.navcontainer} onClick={() => {navigate("/mainpage")}} style={{ cursor: "pointer" }}>
                    <img src={logo1}></img>
                    <h2> ResourceWise </h2>
                </div>
                <div className={styles.navcontainer}>
                    { window.location.pathname.split("/")[1]!=="userprofile" ? <li onClick={goToDonate}>  Donation </li> : ""}
                    <li onClick={logout}> Logout </li>
                    <img id={styles.user} src={logo2} onClick={goToProfile}></img>
                </div>
            </div>
        </>
    )
}

export default Navbar