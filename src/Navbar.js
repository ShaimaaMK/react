import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaRegImages, FaRegClipboard } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around text-white">
                <li className="flex flex-col items-center">
                    <Link to="/" className="flex flex-col items-center">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center">
                    <Link to="/form" className="flex flex-col items-center">
                        <FaRegClipboard />
                        <span>RSVP</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center">
                    <Link to="/activities" className="flex flex-col items-center">
                        <BiGroup />
                        <span>Activitiés</span>
                    </Link>
                </li>
                <li className="flex flex-col items-center">
                    <Link to="/date" className="flex flex-col items-center">
                        <FaCalendarAlt />
                        <span>Date & Lieu</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
