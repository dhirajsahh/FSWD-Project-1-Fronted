import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import axios from "axios";

const Signup = () => {
  const [message, setMessage] = useState();
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const phoneref = useRef(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    setName(nameref.current.value);
    setEmail(emailref.current.value);
    setPassword(passwordref.current.value);
    setPhone(phoneref.current.value);
  }
  async function createuser(name, email, password, phone) {
    const response = await axios.post("http://localhost:5000/api/createuser", {
      name,
      email,
      password,
      phone,
    });
    // console.log(response);
    setMessage(response.data.message);
  }
  useEffect(() => {
    createuser(name, email, password, phone);
  }, [email, password, name, phone]);

  return (
    <div className="loginContainer">
      <h2>{message}</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" ref={nameref} />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" ref={emailref} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" ref={passwordref} />
        <label htmlFor="">Phone</label>
        <input type="number" placeholder="phone" ref={phoneref} />
        <button
          onClick={() => {
            createuser();
          }}
        >
          signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
