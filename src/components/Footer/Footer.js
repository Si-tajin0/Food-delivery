import React from 'react';
import logo from '../../Images/logo_1x.png';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (

        <div className="bg-gray-600 py-4">

            <div className="flex justify-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-gray-300 my-4">
                <p className="flex justify-center">Do you want yourself listed on You Gomoto can register yourself for listing and we will contact you: </p>
                <p className="flex justify-center">Are you already a partner of ours and have questions about the service?</p>
            </div>
            <div className="flex justify-center mb-4 text-3xl">
                <div className="mr-4 text-yellow-500">
                    <FaFacebook></FaFacebook>
                </div>
                <div className="mr-4 text-yellow-500">
                    <FaInstagram></FaInstagram>
                </div>
                <div className="mr-4 text-yellow-500">
                    <FaTwitter></FaTwitter>
                </div>
            </div>
            <div className="border-b-2 mx-6"></div>
            <div className="flex justify-center mt-6">
                <p><span className="text-yellow-400">SI TAJIN &copy;</span> <span className="text-white">All Rights Reserved - 2021</span></p>
            </div>
        </div>
    );
};

export default Footer;