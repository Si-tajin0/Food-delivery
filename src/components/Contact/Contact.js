import React from 'react';
import { GoLocation } from 'react-icons/go';
import { BsFillTelephoneFill, BsStopwatch } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className="contact-bg pt-96">
            <div className="bg-white text-black grid  lg:grid-cols-4 text-center divide-x px-6 py-24">
                <div>
                    <div className="flex justify-center text-2xl text-yellow-500">
                        <h1><GoLocation /></h1>
                    </div>
                    <h2 className="text-xl font-bold">Location</h2>
                    <p>29 Nicolas str, New York, 987597-50</p>
                </div>
                <div>
                    <div className="flex justify-center text-2xl text-yellow-500">
                        <h1><BsFillTelephoneFill /></h1>
                    </div>
                    <h2 className="text-xl font-bold">Phones</h2>
                    <p>0(800) 890-90-609</p>
                    <p>0(800) 890-90-609</p>
                </div>
                <div>
                    <div className="flex justify-center text-2xl text-yellow-500">
                        <h1><MdEmail /></h1>
                    </div>
                    <h2 className="text-xl font-bold">Email</h2>
                    <p>sale@like-themes.com</p>
                    <p>sale@like-themes.com</p>
                </div>
                <div>
                    <div className="flex justify-center text-2xl text-yellow-500">
                        <h1><BsStopwatch /></h1>
                    </div>
                    <h2 className="text-xl font-bold">Working Hours</h2>
                    <p>Wednesday - Sunday</p>
                    <p>7:00 AM - 5:00 PM</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;