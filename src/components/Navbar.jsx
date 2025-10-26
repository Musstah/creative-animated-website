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
  return (
    <div className="text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px] invert" />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 10,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <li>
                  <a
                    href={item.link}
                    className="inline-blick text-base font-semibold py-2 px-3"
                  >
                    {item.title}
                  </a>
                </li>
              </UpdateFollower>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Hamburger section */}
        <div>
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
