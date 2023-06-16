import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiFillFolderAdd } from "react-icons/ai";
import { CiViewTimeline } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import image from "../assests/logo-modified (1).png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav>
        <motion.div className="logo" whileHover={{ scale: 1.1 }}>
          <img src={image} alt="logo" />
        </motion.div>

        <div className="navsection">
          <Link to="/">
            <motion.button whileHover={{ scale: 1.2 }}>Home</motion.button>
          </Link>
          <Link to="/About">
            <motion.button whileHover={{ scale: 1.2 }}>About</motion.button>
          </Link>
          <Link to="/add">
            <motion.button whileHover={{ scale: 1.2 }}>
              <AiFillFolderAdd></AiFillFolderAdd>
            </motion.button>
          </Link>
          <Link to="/view">
            <motion.button whileHover={{ scale: 1.2 }}>
              <CiViewTimeline />
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button whileHover={{ scale: 1.2 }}>
              <MdAccountCircle />
            </motion.button>
          </Link>
          <Link to="/signup">
            <motion.button whileHover={{ scale: 1.2 }}>
              <LuLogIn />
            </motion.button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
