import React from 'react';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='border-b shadow-sm top-0 sticky z-50 bg-blue-950'>
      <header className='flex justify-between items-center px-4 mx-auto'>
        <div>
          <img
            src="https://elearning.zetech.ac.ke/pluginfile.php/1/theme_edutor/logo/1718278272/Portrait%20Logo%20282C%20%281%29.png"
            className='h-5 cursor-pointer'
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className='flex space-x-5'>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/course")}
            >
              Course Catalog / News and Announcement
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/timetables")}
            >
              Teaching & Exams Timetables
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/results")}
            >
              Results / Passlists
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/support")}
            >
              Learner Support
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/library")}
            >
              Library
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/faq")}
            >
              FAQ
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/moocs")}
            >
              MOOCS
            </li>
            <li
              className='text-white cursor-pointer py-3 text-md font-bold'
              onClick={() => navigate("/contacts")}
            >
              Our Contacts
            </li>
          </ul>
        </div>
        <div>
          <li
            className='text-white cursor-pointer py-3 text-md font-bold'
            onClick={() => navigate("/login")}
          >
            Login
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
