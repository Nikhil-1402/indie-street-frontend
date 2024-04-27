import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav py-5 px-10 font-medium bg-[#111]">
        <div className="logo text-3xl">
          <Link to="/">IndieStreet</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
