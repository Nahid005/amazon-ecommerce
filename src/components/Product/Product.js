import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, stock, star } = props.product;
    // console.log(props.product);
    return (
        <div className='single-product'>
            <div className='product-img'>
                <img src={img} alt=''/>
            </div>
            <div className='product-info'>
                <div className='product-title'>
                    <h4> {name} </h4>
                </div>
                <p > by {seller} </p>
                <p> Stock : {stock} </p>
                <p> Review : {star}</p>
                <div className='product-price'>
                    <span> price :{price} </span>
                </div>
                <button className='btn' onClick={() => props.addcart(props.product)} type='button'> Add to cart </button>
            </div>
        </div>
    );
};

export default Product;