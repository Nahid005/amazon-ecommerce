import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total+ element.price;
        
    }

    let shipping = 0;

    if(total > 100){
        shipping = 60;
    }else if(total > 0){
        shipping = 100;
    }else{
        shipping = 0;
    }

    let tex = total/10;

    function tofixd (num) {
        return num.toFixed(2)
    }

    return (
        <div>
            <div className='cart-header'>
                <h4> This is cart header </h4>
            </div>
            <div className='cart-calculation'>
                <p> Total Order: {tofixd(cart.length)}</p>
                <p> Total Price : {tofixd(total)}</p>
                <p> Shipping cost : {tofixd(shipping)}</p>
                <p> Tex + vat : {tofixd(tex)} </p>
                <p> Grand Total : {tofixd(total + shipping + tex)}</p>
            </div>
        </div>
    );
};

export default Cart;