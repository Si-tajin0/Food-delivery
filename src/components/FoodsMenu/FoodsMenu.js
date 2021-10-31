import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./FoodMenu.css";
import Skeleton from './Skeleton';

const FoodsMenu = () => {

    const [menuTab, setMenuTab] = useState('Fast Food');
    const [loading, SetLoading] = useState(false);
    const [foods, setFoods] = useState([]);



    useEffect(() => {
        fetch('https://dark-witch-41365.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])

    // loading 
    useEffect(() => {
        SetLoading(true)
        setTimeout(() => {
            SetLoading(false)
        }, 1000)
    }, [])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }
    return (
        <div>
            <div className="text-center">
                <h4 className="text-base text-yellow-500 font-bold">Quick Pick</h4>
                <h1 className="font-extrabold text-6xl">Popular Goods</h1>
            </div>
            {/* food menu tab */}
            <div className="flex items-center justify-center space-x-6 text-2xl my-12 font-bold">
                <p className={menuTab === "Fast Food" ? "active_menu_tab bg-primary" : "menu_tab"} onClick={() => handleMenuTabs('Fast Food')}>Fast Food</p>
                <p className={menuTab === 'Hot Pizza' ? "active_menu_tab bg-primary" : "menu_tab"} onClick={() => handleMenuTabs('Hot Pizza')}>Hot Pizza</p>
                <p className={menuTab === 'Asian Food' ? "active_menu_tab bg-primary" : "menu_tab"} onClick={() => handleMenuTabs('Asian Food')}>Asian Food</p>
                <p className={menuTab === 'Raw Meat' ? "active_menu_tab bg-primary" : "menu_tab"} onClick={() => handleMenuTabs('Raw Meat')}>Raw Meat</p>
            </div>
            {/* all food */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-10/12 mx-auto">
                {foods.filter((item) => menuTab === item?.Foodtype).map(item => (
                    loading ? <Skeleton key={item?._id} /> :
                        <div key={item._id} className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{item?.Foodtype}</span>
                            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={item?.url} alt="" />
                            <div className="flex flex-col items-center my-3 space-y-2">
                                <h1 className="text-gray-900 poppins text-lg">{item?.name}</h1>
                                <p className="text-gray-500 poppins text-sm text-center">{item?.description.slice(0, 50)}</p>
                                <h2 className="text-gray-900 poppins text-2xl font-bold">${item?.price}</h2>
                                <Link to={`/foodDetail/${item?._id}`}><button className="bg-red-600 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" >Order Now</button></Link>
                            </div>
                        </div>
                ))}
            </div>
        </div >
    );
};

export default FoodsMenu;