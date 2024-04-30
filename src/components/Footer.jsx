import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" py-5 px-10 bg-[#111] absolute bottom-0 w-full">
      <div className="flex justify-center items-center">
        <ul className="flex justify-center items-center">
          <li className=" mx-2 border border-[#ff841f] grid w-10 h-10 place-items-center rounded hover:shadow-[0_0_20px_rgba(255,132,31,1)] ease-in-out transition-all duration-200">
            <a href="" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li className=" mx-2 text-xl border border-[#ff841f] grid w-10 h-10 place-items-center rounded hover:shadow-[0_0_20px_rgba(255,132,31,1)] ease-in-out transition-all duration-200">
            <a href="" target="_blank">
            <AiFillInstagram />

            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
