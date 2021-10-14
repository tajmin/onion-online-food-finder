import React from 'react';
import useMeals from '../../../hooks/useMeals';

const Meals = () => {
    const meals = useMeals();
    console.log(meals);
    return (
        <div>
            <div className="container">
                <h1 className="fs-1">Meals</h1>
            </div>

        </div>
    );
};

export default Meals;