import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./addtodo.css";

const AddTodo = () => {
  const [data, setData] = useState("");
  const titleref = useRef(null);
  const informationref = useRef(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const email = useSelector((state) => state.user.email);
  async function createtodo() {
    const response = await axios.post("http://localhost:5000/api/createtodo", {
      email,
      title,
      message,
    });
    setData(response.data);
    // console.log(data);
    // console.log(response);
  }
  function handlesubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    createtodo();
  }, [email, title, message]);
  return (
    <div className="addtodo">
      {data && <h2>{data.message}</h2>}
      <form action="" onSubmit={handlesubmit}>
        <div className="title">
          <label htmlFor="">
            <h3>Title</h3>
          </label>

          <input type="text" ref={titleref} />
        </div>
        <label htmlFor="">Message</label>
        <input type="text" ref={informationref} />
      </form>
      <button
        onClick={() => {
          setTitle(titleref.current.value);
          setMessage(informationref.current.value);
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default AddTodo;
