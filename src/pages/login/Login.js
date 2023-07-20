import axios from "axios";
import { useContext, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { BackEnd_Url } from "../../services/config";

const Login = () => {

  const location = useLocation();
  const name = location.state.name;
  console.log(name);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [email , setEmail] = useState("");


  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post(`${BackEnd_Url}/api/auth/login`, credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/home")
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  const newUser = {
    username : credentials.username,
    email:email,
    password:credentials.password
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${BackEnd_Url}/api/auth/register`, newUser);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="loginWrap">
      <img className="loginImg" src="images/pexels-andrea-piacquadio-3769138.jpg" alt="" />
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            required
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          {name==="register" && <input
            type="email"
            required
            placeholder="Email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            className="lInput"
          />}
          <input
            type="password"
            placeholder="password"
            required
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          {name==="login" && <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>}
          {name === "register" &&
          <button disabled={loading} onClick={handleRegister} className="lButton">
            Register
          </button>}
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;