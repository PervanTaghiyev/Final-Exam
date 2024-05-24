import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="header">
            <div className="banner">
                <div className="banner-add">
                <h2>COLO<span>SHOP</span></h2>
                </div>
            </div>
            <nav>
                <ul>
                        <NavLink>Home</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>Promotion</NavLink>
                        <NavLink>Pages</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Contact</NavLink>
                </ul>
            </nav>
            <div className="icons">
            <IoMdSearch />
            <FaUser />
            <FaCartShopping />

            </div>
        </div>
    </div>
    <div className="item">
    <div className="header-img">
    <img src="https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg" alt="logo"/>

    </div>
    </div>
<div className="contain">
    <div className="cont">
        <div className="font">
            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="img" />
            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="img" />
            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="img" />
        </div>
    </div>
</div>
   </header>
  )
}

export default Header