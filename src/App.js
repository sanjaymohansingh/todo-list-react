import React from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import Axios from "axios";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
//   const [registerStatus, setRegisterStatus] = useState("");

//   const register = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:5001/api/users/signup", {
//       username: username,
//       email: email,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         setRegisterStatus(response.data.message);
//       } else {
//         setRegisterStatus("Account Created Successfully");
//       }
//     });
//   };

//   const login = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:5001/api/users/login", {
//       email: email,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         setLoginStatus(response.data.message);
//       } else {
//         setLoginStatus(response.data[0].email);
//       }
//     });
//   };

//   return (
//     <div className="container">
//       <div className="loginForm">
//         <form action="">
//           <h4>Login Here</h4>
//           {/* <label htmlFor="username">Username</label>
//           <input
//             class="textInput"
//             type="text"
//             name="username"
//             placeholder="Enter you Username"
//             required
//           /> */}
//           <label htmlFor="email">Email</label>
//           <input
//             class="textInput"
//             type="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter you Email"
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             class="textInput"
//             type="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your Password"
//             required
//           />
//           <input
//             className="button"
//             type="submit"
//             onClick={login}
//             value="Login"
//           />
//           <h1
//             style={{
//               color: "red",
//               fontSize: "15px",
//               textAlign: "center",
//               margin: "20px",
//             }}
//           >
//             {loginStatus}
//           </h1>
//         </form>
//       </div>
//       <div className="loginform">
//         <form action="">
//           <h4>Register Here</h4>
//           <label htmlFor="username">Username</label>
//           <input
//             class="textInput"
//             type="text"
//             name="username"
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter you Username"
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             class="textInput"
//             type="email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter you Email"
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             class="textInput"
//             type="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your Password"
//             required
//           />
//           <input
//             className="button"
//             onClick={register}
//             type="submit"
//             value="Create an account"
//           />
//           <h1
//             style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
//           >
//             {registerStatus}
//           </h1>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;
