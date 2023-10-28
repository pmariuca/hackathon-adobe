import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/mainpage/mainpage.jsx';
import NewDonation from './pages/newdonation/newdonation.jsx';
import UserProfile from './pages/userprofile/userprofile.jsx';
import ViewDonation from './pages/viewdonation/viewdonation.jsx';
import Login from './pages/login/login.jsx';
import Navbar from './components/navbar/navbar.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/newdonation" element={<NewDonation />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* Define other routes and components here */}
      </Routes>
    </Router>
  );
}

export default App;
