import React, { useContext } from "react";
import { useState } from "react";
import logo from "../../assets/ots_logo.JPG";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthData } from "../../App";
// import logo from "../../assets/logo";

const NavBar = () =>{
	const currentRoute = useHistory().location.pathname.toLowerCase();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	let isAuthenticated = localStorage.getItem('login');

	const logOut = () =>{
		localStorage.clear();
	}

	function showDiv() {
		document.getElementById('mobile_menu').style.display = "block";
	}
    return (
		<nav className="bg-white shadow-lg w-full relative">
			{/* <p>{value}</p> */}
			<div className="max-w-8xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div className="md:flex items-left space-x-1">
							<a href="/home" className="flex items-center py-4 px-2">
								<img src={logo} alt="Logo" className="h-12 w-16 mr-2" />
							</a>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<a  className={currentRoute.includes("home") ? 	"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/home">Home</a>
							<a  className={currentRoute.includes("about") ? 	"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/about" >About</a>
							<a  className={currentRoute.includes("courses") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/courses" >Courses</a>
							<a  className={currentRoute.includes("carrier") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/carrier" >Carrier</a>
							<a  className={currentRoute.includes("services") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/services" >Service</a>
							<a  className={currentRoute.includes("contact") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/contact" >Contact Us</a>
						
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						{!isAuthenticated ? <a  className={currentRoute.includes("login") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/login" >Log In</a> :
						<a  className={currentRoute.includes("profile") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/login" >Profile</a> }
						{!isAuthenticated ? <a  className={currentRoute.includes("signUp") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"}href="/signUp" >Sign Up</a>:
						<a  className={currentRoute.includes("logout") ?"text-green-500 border-b-4 border-green-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg" : "text-gray-500 py-4 px-2 font-semibold hover:bg-white transition hover:text-green-500 hover:shadow-lg transform hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg duration-300"} onClick={logOut()} >Log Out</a>}
					</div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{showMobileMenu && <div className="mobile-menu" id="mobile_menu">
				<ul className="">
					<li className="active"><a href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="/courses" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Courses</a></li>
					<li><a href="/carrier" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Carrier</a></li>
					<li><a href="/services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Service</a></li>
					<li><a href="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>										
					<li><a href="/login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Login</a></li>
					<li><a href="/studnet-SignUp" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</a></li>
				</ul>
			</div>}
            </nav>
    )
}
export default NavBar;