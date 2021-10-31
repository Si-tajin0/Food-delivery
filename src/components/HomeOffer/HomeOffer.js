import React from 'react';
import { BsFillStopwatchFill } from 'react-icons/bs';
import { FaMobile, FaUserAstronaut } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const HomeOffer = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <img src="https://i.ibb.co/87Mx3BN/sit-photo.jpg" alt="" />
            </div>
            <div className="bg-gray-900 home-offer lg:pt-44 lg:px-16">
                <div>

                    <h1 className="text-5xl text-white my-4">Sit at Home</h1>
                    <h1 className="text-6xl text-yellow-500">We Will Take Care</h1>
                    <p className="text-base text-gray-300">Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
                </div>
                <div className="text-white grid grid-cols-4 my-12">
                    <div>
                        <div className="text-8xl text-yellow-500"><BsFillStopwatchFill /></div>
                        <h5 className="text-xl py-2">Fast Delivery</h5>
                        <h6>in 1 Hour</h6>
                    </div>
                    <div>
                        <div className="text-8xl text-yellow-500"><FaMobile /></div>
                        <h5 className="text-xl py-2">Amazing</h5>
                        <h6>Mobile App</h6>
                    </div>
                    <div>
                        <div className="text-8xl text-yellow-500"><FiMapPin /></div>
                        <h5 className="text-xl py-2">Wide</h5>
                        <h6>Coverage Map</h6>
                    </div>
                    <div>
                        <div className="text-8xl text-yellow-500"><FaUserAstronaut /></div>
                        <h5 className="text-xl py-2">More Than</h5>
                        <h6>150 Couriers</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOffer;