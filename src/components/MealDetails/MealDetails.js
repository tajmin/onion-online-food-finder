import React from 'react';
import { useParams } from 'react-router';
import useMeals from '../../hooks/useMeals';

const MealDetails = () => {
    const { mealID } = useParams();
    console.log(typeof mealID);
    const [meals, setMeals] = useMeals();


    return (
        <div>
            <h1>Meal Details</h1>
        </div>
    );
};

export default MealDetails;