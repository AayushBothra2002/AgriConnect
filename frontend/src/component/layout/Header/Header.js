import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Untitled.png";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
// const option = {
//   burgerColorHover: "#ccff33",
//   navColor1: "white",
//   logo,
//   logoWidth: "20vmax",
//   logoHoverSize: "5px",
//   logoHoverColor: "#ccff33",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
  // return <ReactNavbar {...option} />;
  return <ReactNavbar
  burgerColorHover= "#ccff33"
  navColor1= "white"
  logo={logo}
  logoWidth= "20vmax"
  logoHoverSize= "5px"
  logoHoverColor= "#ccff33"
  link1Text= "Home"
  link2Text= "Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "1.3vmax"
  link2Size= "1.3vmax"
  link3Size= "1.3vmax"
  link4Size= "1.3vmax"
  link1Color= "rgba(35, 35, 35,0.8)"
  link2Color= "rgba(35, 35, 35,0.8)"
  link3Color= "rgba(35, 35, 35,0.8)"
  link4Color= "rgba(35, 35, 35,0.8)"
  searchIcon={true}
  SearchIconElement = {MdSearch}
  searchIconColor= "black"
  searchIconColorHover= "#ccff33"
  cartIcon={true}
  CartIconElement = {MdAddShoppingCart}
  cartIconColor= "black"
  cartIconColorHover= "#ccff33"
  cartIconMargin= "1vmax"
  profileIcon={true}
  ProfileIconElement = {MdAccountCircle}
  profileIconColor= "black"
  profileIconColorHover= "#ccff33"
  profileIconUrl= "/login"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#ccff33"
  link2ColorHover= "#ccff33"
  link3ColorHover= "#ccff33"
  link4ColorHover= "#ccff33"
  link1Margin= "1vmax"
  link2Margin= "1vmax"
  link3Margin= "1vmax"
  link4Margin= "1vmax"
  // profileIcon={true}
  // searchIcon={true}
  // cartIcon={true}
  
        />
};

export default Header;
