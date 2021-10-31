import React from 'react';
import { MdElectricMoped, MdOutlineCorporateFare } from 'react-icons/md';
import { SiDeliveroo } from 'react-icons/si';
import { GiFamilyHouse } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';

const FoodCard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-12">
            <div className="flex items-center justify-center  border bg-yellow-100 p-6 rounded-lg transform -translate-y-28  hover:scale-125 hover:bg-white delay-400 duration-500 ease-in-out">
                <div className="text-6xl text-yellow-500"><MdElectricMoped /></div>
                <h3 className="text-2xl font-bold">Express Delivery</h3>
            </div>
            <div className="flex items-center justify-center border bg-yellow-100  p-6 rounded-lg transform -translate-y-28 hover:scale-125 hover:bg-white delay-400 duration-500 ease-in-out">
                <div className="text-6xl text-yellow-500"><SiDeliveroo /></div>
                <h3 className="text-2xl font-bold">Merchant Delivery</h3>
            </div>
            <div className="flex items-center justify-center border bg-yellow-100  p-6 rounded-lg transform -translate-y-28 hover:scale-125 hover:bg-white delay-400 duration-500 ease-in-out">
                <div className="text-6xl text-yellow-500"><MdOutlineCorporateFare /></div>
                <h3 className="text-2xl font-bold">Corporate Delivery</h3>
            </div>
            <div className="flex items-center justify-center border bg-yellow-100  p-6 rounded-lg transform -translate-y-28 hover:scale-125 hover:bg-white delay-400 duration-500 ease-in-out">
                <div className="text-6xl text-yellow-500"><GiFamilyHouse /></div>
                <h3 className="text-2xl font-bold">Wear Housing</h3>
            </div>
            <div className="flex items-center justify-center border bg-yellow-100  p-6 rounded-lg transform -translate-y-28 hover:scale-125 hover:bg-white delay-400 duration-500 ease-in-out">
                <div className="text-6xl text-yellow-500"><FaTruck /></div>
                <h3 className="text-2xl font-bold">Heavy Transport</h3>
            </div>

        </div>
    );
};

export default FoodCard;