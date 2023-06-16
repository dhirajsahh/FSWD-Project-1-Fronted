import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../Redux/slices/UserSlice";
import { setMessage } from "../Redux/slices/TodoSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const emailref = useRef(null);
  const passwordref = useRef(null);
  let verifedemail = useSelector((state) => state.user.email);
  async function getTodo() {
    const email = verifedemail;
    const response = await axios.post("http://localhost:5000/api/gettodo", {
      email,
    });
    const message = await response.data.getTodo;
    dispatch(setMessage(message));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const email = emailref.current.value;

    const password = passwordref.current.value;

    if (!email || !password) {
      alert("Enter all the details");
    } else {
      dispatch(setEmail(email));
      dispatch(setPassword(password));
    }
  }

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  // const selector = useSelector((state) => state.messageSlice.message);
  // console.log(selector);

  async function userlogin(email, password) {
    const response = await axios.post("http://localhost:5000/api/userlogin", {
      email,
      password,
    });
    // console.log(response);
    setmessage(response.data.message);
  }
  useEffect(() => {
    userlogin(email, password);
  }, [email, password]);
  useEffect(() => {
    getTodo(verifedemail);
  }, [verifedemail]);
  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <h2>{message}</h2>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="email" ref={emailref} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" ref={passwordref} />
        <button
          onClick={() => {
            getTodo();
            userlogin();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
