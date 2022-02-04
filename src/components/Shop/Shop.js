import React from 'react';
import { useState } from 'react';
import data from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const addCart = (product)=> {
        console.log('product added', product);
    }
    const frist10 = data.slice(0, 10);
    const [products, setProducts] = useState(frist10) ;
    const [cart, setCart] = useState([]);
    return (
        <div className='shop-container'>
            <div className='product-card'>
                {
                    products.map(pd => <Product addcart={addCart} product={pd}></Product>)
                }
            </div>
            <div className='cart-info'>

            </div>
        </div>
    );
};

export default Shop;