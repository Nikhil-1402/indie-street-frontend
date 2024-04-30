import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav py-5 md:px-10 px-7 font-medium bg-[#111]">
        <div className="logo md:text-3xl text-2xl">
          <Link to="/">IndieStreet</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
