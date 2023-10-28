import styles from './styles.module.css'
import logo from '..//..//assets/user_logo.png'
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
                <input type="text" className={styles.search_donation} id="searchInput" placeholder='Search' autoComplete='off'></input>
                <div className={styles.navcontainer}>
                    <li onClick={goToDonate}>  Donation </li>
                    <li onClick={logout}> Logout </li>
                    <img id={styles.user} src={logo} onClick={goToProfile}></img>
                </div>
            </div>
        </>
    )
}

export default Navbar