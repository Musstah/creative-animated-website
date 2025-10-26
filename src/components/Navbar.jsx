import React from "react";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
