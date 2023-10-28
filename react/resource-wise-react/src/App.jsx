import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './pages/mainpage/mainpage.jsx';
import NewDonation from './pages/newdonation/newdonation.jsx';
import UserProfile from './pages/userprofile/userprofile.jsx';
import ViewDonation from './pages/viewdonation/viewdonation.jsx';
import Login from './pages/login/login.jsx';
import Register from "./pages/register/register.jsx";
import './index.css';
import ResetPassword from "./pages/ResetPassword.jsx/ResetPassword.jsx";
import ChangePassword from "./pages/ChangePassword/ChangePassword.jsx";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/newdonation" element={<NewDonation />} />
        <Route path="/donations/:id" element={<ViewDonation />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password/:id" element={<ChangePassword />} />
        {/* Define other routes and components here */}
      </Routes>
    </Router>
  );
}

export default App;
