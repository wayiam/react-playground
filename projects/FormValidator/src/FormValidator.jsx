import React, { useState } from 'react'
import './styles.css'

const FormValidator = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    const [userNameError, setUserNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')



    const [userNameColor, setUserNameColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')



    const validate = (e) => {
        e.preventDefault();
        if (userName.length > 8) {
            setUserNameError("");
            setUserNameColor("green");
        } else {
            setUserNameError("Username must be at least 8 characters long.");
            setUserNameColor("red");
        }

        if (email.includes("@gmail")) {
            setEmailError("");
            setEmailColor("green")
        } else {
            setEmailError("Please enter a valid email address.");
            setEmailColor("red");
        }

        if (password.length > 8) {
            setPasswordError("");
            setPasswordColor("green");
        } else {
            setPasswordError("Password must be at least 8 characters long.");
            setPasswordColor("red");
        }

        if (password != "" && confirmPassword == password) {
            setConfirmPassword("")
            setConfirmPasswordColor("green")
        } else {
            setConfirmPasswordError("Passwords do not match.");
            setConfirmPasswordColor("red")  
        }
    }

    return (
        <div className='card'>
            <div className="card-image"></div>
            <form>
                <input type="text"
                    placeholder="username"
                    style={{ borderColor: userNameColor }}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <p className='error'>{userNameError}</p>
                <input type="email"
                    placeholder='Email'
                    style={{ borderColor: emailColor }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p className='error'>{emailError}</p>
                <input type="password"
                    placeholder='Password'
                    style={{ borderColor: passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <p className='error'>{passwordError}</p>
                <input type="password"
                    placeholder='Confirm Password'
                    style={{ borderColor: confirmPasswordColor }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className='error'>{confirmPasswordError}</p>
                <button type='submit' className='submit-btn' onClick={validate}>Submit</button>
            </form>
        </div>
    )
}

export default FormValidator

//   const [username, setusername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [errorUserName, setErrorUserName] = useState("");
//   const [errorEmail, setErrorEmail] = useState("");
//   const [errorPassword, setErrorPassword] = useState("");
//   const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

//   const [userColor, setUserColor] = useState("");
//   const [emailColor, setEmailColor] = useState("");
//   const [passwordColor, setPasswordColor] = useState("");
//   const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

//   function validate(e) {
//     e.preventDefault();

//     if (username.length > 8) {
//       setErrorUserName("");
//       setUserColor("green");
//     } else {
//       setErrorUserName("Username must be 8 letters long.");
//       setUserColor("red");
//     }

//     if (email.includes("@gmail")) {
//       setErrorEmail("");
//       setEmailColor("green");
//     } else {
//       setEmailColor("red");
//       setErrorEmail("Email should have @gmail");
//     }

//     if (password.length > 8) {
//       setErrorPassword("");
//       setPasswordColor("green");
//     } else {
//       setErrorPassword("Password should be 8 letters long ");
//       setPasswordColor("red");
//     }

//     if (password != "" && password == confirmPassword) {
//       setErrorConfirmPassword("");
//       setConfirmPasswordColor("green");
//     } else {
//       setErrorConfirmPassword("Passwords didn't matched.");
//       setConfirmPasswordColor("red");
//     }
//   }

//   return (
//     <>
//       <div className="card">
//         <div className="card-image"></div>

//         <form>
//           <input
//             type="text"
//             placeholder="Name"
//             style={{ borderColor: userColor }}
//             value={username}
//             onChange={(e) => setusername(e.target.value)}
//           />

//           <p className="error">{errorUserName}</p>

//           <input
//             type="text"
//             placeholder="Email"
//             style={{ borderColor: emailColor }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <p className="error">{errorEmail}</p>

//           <input
//             type="password"
//             placeholder="Password"
//             style={{ borderColor: passwordColor }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <p className="error">{errorPassword}</p>

//           <input
//             type="password"
//             placeholder="Confirm Password"
//             style={{ borderColor: confirmPasswordColor }}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <p className="error">{errorConfrimPassword}</p>

//           <button className="submit-btn" onClick={validate}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Main;