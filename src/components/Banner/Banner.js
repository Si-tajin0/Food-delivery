import React from 'react';
import './Banner.css';
import deliveryBoy from '../../Images/slider-courier-mask.png';

const Banner = () => {
    return (
        <section className="banner-bg-1">
            <div className="banner-bg-2">
                <div className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                    <div className="text-white lg:flex items-center justify-center">
                        <div>
                            <h1 className="text-7xl">Express <br />
                                <span className="text-yellow-500">Home Delivery</span></h1>
                            <p className="text-base mt-4">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                            <button className="bg-yellow-500 hover:bg-white text-black font-bold py-2 px-4 rounded-full mt-4">
                                Read More
                            </button>

                        </div>
                    </div>
                    <div className="mt-16">
                        <img src={deliveryBoy} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;