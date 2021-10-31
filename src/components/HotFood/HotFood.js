import React from 'react';
import PizzaImg from '../../Images/pizza.png';

const HotFood = () => {
    return (
        <div className="hotFood-bg bg-yellow-400">
            <div className="grid grid-cols-2 py-24 px-12">
                <div className="mt-20">
                    <div>
                        <h1 className="text-7xl text-white font-bold">Always</h1>
                        <h1 className="text-7xl text-gray-800 font-bold">the Hottest</h1>
                        <h1 className="text-7xl text-gray-800 font-bold">Pizza</h1>
                        <p className="text-base">Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
                    </div>
                </div>
                <div>
                    <img src={PizzaImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HotFood;