import React from "react";
import "./Home.css";
import image from "../assests/Homeimage.jpg";
const Home = () => {
  return (
    <div className="Home">
      <div className="imagecontainer">
        <img src={image} alt="Homeimage" />
      </div>
      <div className="textcontainer">
        <h2>Welcome to the Note taking App</h2>
      </div>
    </div>
  );
};

export default Home;
