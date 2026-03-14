import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 -ml-25 hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-600">
          <a
            href="https://www.linkedin.com/in/kirtan-kumar-2a5443289/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn
              <FaLinkedin size={25} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 -ml-25 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800">
          <a
            href="https://github.com/KirtanCoder"
            target="_blank"
            rel="noreferrer"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github
              <FaGithub size={25} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 -ml-25 hover:ml-[-10px] hover:rounded-md duration-300 bg-red-500">
          <a
            href="mailto:kirtankrpc@outlook.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Mail
              <HiOutlineMail size={25} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 -ml-25 hover:ml-[-10px] hover:rounded-md duration-300 bg-green-600">
          <a
            href="mailto:kirtankrpc@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Contact
              <BsFillPersonLinesFill size={25} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;