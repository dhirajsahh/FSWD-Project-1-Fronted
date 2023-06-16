import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./viewtood.css";
import axios from "axios";
import { removeMessage } from "../Redux/slices/TodoSlice";
const ViewTodo = () => {
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.messageSlice.message);
  async function deleteTodo(id) {
    const response = await axios.delete(
      "http://localhost:5000/api/deletetodo",
      {
        data: {
          id,
        },
      }
    );
    setmessage(response.data.message);
    // console.log(response);
    // console.log(id);
  }

  // console.log(selector);
  return (
    <div className="viewcontainer">
      <h2>Your Todo list</h2>
      <div className="viewtodo">
        {selector[0] &&
          selector[0].map((item, index) => {
            return (
              <div key={item._id}>
                <main>
                  <h2>{item.title}</h2>
                  <p>{item.message}</p>
                  <div className="buttoncontainer">
                    <button
                      onClick={() => {
                        dispatch(removeMessage(item._id));
                        deleteTodo(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </main>
              </div>
            );
          })}
      </div>
      <h2>{message}</h2>
    </div>
  );
};

export default ViewTodo;
