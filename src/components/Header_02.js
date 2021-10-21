import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../assets/crown.svg';
import "./Header_02.scss"

const Header_02 = () => {
  return (
    <div>
      <div className="header">
        <Link href="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link href="./shop_02" className="option">
            Shop
          </Link>
          <Link href="/contact_02" className="option">
            Contact
          </Link>
          <Link href="/signin_02" className="option">
            Sign In
          </Link>
          </div>
        </div>
      </div>
  );
};

export default Header_02;
