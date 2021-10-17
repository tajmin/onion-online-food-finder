import React from 'react';
import useCart from '../../hooks/useCart';
import useMeals from '../../hooks/useMeals';

const Cart = () => {
    const [meals] = useMeals()
    const [cart, setCart] = useCart(meals);
    return (
        <div>
            <h1>This is cart {cart.map(item => item.id)}</h1>
        </div>
    );
};

export default Cart;