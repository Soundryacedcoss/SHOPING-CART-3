import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./images/dark-mode.png";
import { DataContext } from "./App";
import { themeContext } from "./App";
import { Product } from "./Product";
export const Navbar = () => {
  const data = useContext(DataContext);
  const style = useContext(themeContext);
  const [isClick, setIsClick] = useState(true);

  const TheameIcon = () => {
    if (isClick === true) {
      style.setTheme({ backgroundColor: "gray" });
      setIsClick(false);
    } else {
      style.setTheme();
      setIsClick(true);
    }
  };
  return (
    <>
      <div className="Navbar">
        <div id="header">
          <nav>
            <ul id="menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/ProductData"}>Products</Link>
              </li>
              <li>
                <Link to={"/Contct"}>Contact</Link>
              </li>
              <li>
                <Link to={"/Cart"}>🛒Cart{data.cartArr.length}</Link>
              </li>
              <li>
                <img
                  onClick={TheameIcon}
                  value={isClick}
                  className="DarkMode"
                  src={DarkMode}
                  alt=""
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Product />
    </>
  );
};
