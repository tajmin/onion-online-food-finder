import { useEffect, useState } from "react"
import { getLocalCart } from "../utils/localStorage";

const useCart = meals => {
    const [cart, setCart] = useState([]);
    const localCart = getLocalCart();


    useEffect(() => {
        if (meals?.length) {
            const updatedCart = [];
            for (const key in localCart) {
                const addedMeal = meals.find(meal => meal.id.toString() === key);
                if (addedMeal) {
                    const quantity = localCart[key];
                    addedMeal.quantity = quantity;
                    updatedCart.push(addedMeal);
                }
            }
            setCart(updatedCart);
        }

    }, [meals])

    return [cart, setCart];
}


export default useCart;