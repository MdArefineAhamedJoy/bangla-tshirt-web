import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt}) => {
    const {price,picture,name} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p> {name}</p>
            <p>Price : ${price}</p>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default TShirt;