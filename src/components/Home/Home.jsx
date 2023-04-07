import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideCart from '../SideCart/SideCart';
import TShirt from '../TShirt/TShirt';
import "./Home.css"

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div className='home-container'>
            <div className='product-container'>
            {
            tShirts.map(tShirt => <TShirt
            key = {tShirt._id}
            tshirt = {tShirt}
            ></TShirt>)
           }
            </div>
            <div className='sideCart-container'>
              <SideCart></SideCart>
            </div>
        </div>
    );
};

export default Home;