import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

export const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setPageState("Profile")
        } else {
            setPageState("Sign In")
        }
    })
  })


  function pathBorder(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-10 py-3 mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
            alt=""
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-md font-semibold border-b-[3px] border-b-transparent ${
                pathBorder("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/buy")}
            >
              Buy
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-semibold border-b-[3px] border-b-transparent ${
                pathBorder("/sell") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sell")}
            >
              Sell
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-semibold border-b-[3px] border-b-transparent ${
                pathBorder("/rent") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/rent")}
            >
              Rent
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-semibold border-b-[3px] border-b-transparent ${
                pathBorder("/mortgage") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/mortgage")}
            >
              Mortgage
            </li>
            <li
              className={`cursor-pointer py-3 text-md font-semibold border-b-[3px] border-b-transparent ${
                pathBorder("/myhome") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/myhome")}
            >
              My Home
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
