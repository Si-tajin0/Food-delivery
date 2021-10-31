import React from 'react';
import Banner from '../Banner/Banner';
import FoodCard from '../FoodCard/FoodCard';
import FoodsMenu from '../FoodsMenu/FoodsMenu';
import HomeOffer from '../HomeOffer/HomeOffer';
import HotFood from '../HotFood/HotFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCard></FoodCard>
            <FoodsMenu></FoodsMenu>
            <HomeOffer></HomeOffer>
            <HotFood></HotFood>
        </div>
    );
};

export default Home;