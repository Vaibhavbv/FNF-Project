import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Sidebar from "./Sidebar";
import { LOGO_URL } from "../Utility/constants";
import Profile from "./Profile";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    const { isAuthenticated } = useAuth0();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="header">
            <div>
                <Link to="/" className="link"><img className="logo" src={LOGO_URL} alt="FNF Logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li className="cart-link" onClick={toggleSidebar}>
                        <FontAwesomeIcon className='cart-icon-container' icon={faCartShopping}/>
                        <span className="cart-count">{cartItems?.length || 0}</span>
                    </li>
                    <Profile/>
                    {/* Conditionally render LoginButton or LogoutButton based on authentication status */}
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </ul>
            </div>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
    );
};
export default Header;
