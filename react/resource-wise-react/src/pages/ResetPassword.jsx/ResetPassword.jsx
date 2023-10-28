import { useState } from 'react'

const ResetPassword = () => {
  const [email, setEmail] = useState("")
  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (email === "") {
      alert("Please enter an email address")
      return
    }
    fetch("http://localhost:3000/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email })
    }).then(response => response.json()).then(data => {
      if (data.statusCode !== 401) {
        alert("Password reset email sent")
      } else {
        alert("Invalid email address")
      }
    }).catch(error => { console.log(error) })
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <p>Enter your email address and we will send you a link to reset your password.</p>
      <input id="email" type="email" placeholder="Email" value={email} onChange={handleChange} required />
      <button onClick={handleSubmit}>Reset Password</button>
    </div>
  )
}

export default ResetPassword