import React from 'react';
import { useState } from 'react';
import data from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = (props) => {
    console.log(data);
    const frist10 = data.slice(0, 10);
    const [products, setProducts] = useState(frist10) ;
    const [cart, setCart] = useState([]);

    const addCart = (p)=> {
        const newCart = [...cart, p];
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className='product-card'>
                {
                    products.map(pd => <Product addcart={addCart} product={pd}></Product>)
                }
            </div>
            <div className='cart-info'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;