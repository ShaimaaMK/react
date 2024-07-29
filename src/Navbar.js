import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaRegImages, FaUtensils } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around text-white">
                <li>
                    <Link to="/">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/form">
                        <FaUtensils />
                        <span>RSVP</span>
                    </Link>
                </li>
                <li>
                    <Link to="/activities">
                        <BiGroup />
                        <span>Activities</span>
                    </Link>
                </li>
                <li>
                    <Link to="/date">
                        <FaCalendarAlt />
                        <span>Date & Lieu</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
