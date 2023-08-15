"use client";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { LuNewspaper } from "react-icons/lu";
import { LuBook } from "react-icons/lu";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { BsLaptop } from "react-icons/bs";
import { useState } from "react"; // Import useState hook

const MenuBottom = () => {
  const [activeLink, setActiveLink] = useState(null); // State to track active link

  // Function to handle link click
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div id="menu-bottom" className="hidden">
      <div className="flex text-2xl justify-between px-10 py-6">
        <Link
          href="/"
          className={`menu-link ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleLinkClick(0)}
        >
          <BiHomeAlt2 />
        </Link>
        <Link
          href="/about"
          className={`menu-link ${activeLink === 1 ? "active" : ""}`}
          onClick={() => handleLinkClick(1)}
        >
          <GoPerson />
        </Link>
        <Link
          href="/articles"
          className={`menu-link ${activeLink === 2 ? "active" : ""}`}
          onClick={() => handleLinkClick(2)}
        >
          <LuNewspaper />
        </Link>
        <Link
          href="/projects"
          className={`menu-link ${activeLink === 3 ? "active" : ""}`}
          onClick={() => handleLinkClick(3)}
        >
          <LuBook />
        </Link>
        <Link
          href="/speaking"
          className={`menu-link ${activeLink === 4 ? "active" : ""}`}
          onClick={() => handleLinkClick(4)}
        >
          <PiMicrophoneStageBold />
        </Link>
        <Link
          href="/uses"
          className={`menu-link ${activeLink === 5 ? "active" : ""}`}
          onClick={() => handleLinkClick(5)}
        >
          <BsLaptop />
        </Link>
      </div>
    </div>
  );
};

export default MenuBottom;
