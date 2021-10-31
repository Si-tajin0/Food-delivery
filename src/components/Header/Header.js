import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useOrder } from '../../contexts/OrderProvider';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo_1x.png';

const Header = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    const history = useHistory();
    const { user, signOutUser } = useAuth();
    const { order } = useOrder();

    // Header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        }
        else {
            setChangeHeader(false)
        }
    }
    // change header by scrolling 
    window.addEventListener('scroll', onChangeHeader);

    return (
        <header className={changeHeader ? "bg-black fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* left  */}
                <div className="flex flex-grow">
                    <img className="w-36 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow text-white">
                        <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</Link>

                        <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About Us</Link>
                        <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</Link>
                    </div>
                    {user.displayName ? (
                        <>
                            <div className="flex items-center justify-end space-x-4">
                                <NavLink to="/addFood" className="text-white">Add Food</NavLink>
                                <NavLink to="/manage-product" className="text-white">Manage Product</NavLink>
                                <div className="relative flex cursor-pointer" onClick={() => history.push('/placeOrder')}>
                                    <span className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2"> {order.length}</span>
                                    <BsCart2 className="cursor-pointer w-6 h-6 text-yellow-600" />
                                </div>
                                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                                <p className="text-white poppins hidden md:block lg:block">{user.displayName}</p>
                                <FiLogOut className="cursor-pointer w-6 h-6 text-yellow-700" onClick={signOutUser} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-end">

                                <button className=" bg-red-500 px-6 py-3 text-white rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => history.push('/login')}>Sign In</button>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;