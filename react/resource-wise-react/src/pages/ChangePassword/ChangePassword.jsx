import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    fetch(`http://localhost:3000/auth/change-password`, {
      body: JSON.stringify({ token: window.location.pathname.split("/")[2], password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then(response => response.json()).then(data => {
      if (data.statusCode !== 401) {
        alert("Password changed successfully")
        navigate("/login")
      } else {
        alert("Invalid token")
        navigate("/login")
      }
    }).catch(error => { console.log(error) })
  }
  return (
    <div>
      <input id="password" type="password" placeholder="Password" required />
      <input id="confirmPassword" type="password" placeholder="Confirm Password" required />
      <button onClick={handleSubmit}>Change Password</button>
    </div>
  )
}

export default ChangePassword
