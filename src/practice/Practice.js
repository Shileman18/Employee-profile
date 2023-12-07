import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '20px' }}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{ position: 'relative' }}>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span
//             style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//             onClick={handleTogglePassword}
//           >
//             <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//           </span>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;



//    // <span
//    //          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//    //          onClick={handleTogglePassword}
//    //        >
//    //          {showPassword ? (
//    //            <img
//    //              src="https://example.com/open-eye-icon.png"  // Replace with the URL of your open eye icon
//    //              alt="Open Eye"
//    //              style={{ width: '20px', height: '20px' }}
//    //            />
//    //          ) : (
//    //            <img
//    //              src="https://example.com/closed-eye-icon.png"  // Replace with the URL of your closed eye icon
//    //              alt="Closed Eye"
//    //              style={{ width: '20px', height: '20px' }}
//    //            />
//    //          )}
//    //        </span>

//    //        //////
//    //        {showPassword ? '👁️' : '👁️‍🗨️'}