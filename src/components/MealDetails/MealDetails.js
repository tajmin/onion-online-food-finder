import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useMeals from '../../hooks/useMeals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './MealDetails.css'
import { Button } from 'react-bootstrap';

const MealDetails = () => {
    const { mealID } = useParams();
    const [meals, setMeals] = useMeals();
    const [detailedMeal, setDetailedMeal] = useState();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const mealInfo = meals?.find(ml => ml.id.toString() === mealID);
        setDetailedMeal(mealInfo);
    }, [meals])


    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-6 order-md-5">
                    <img className="w-100 p-4" src={detailedMeal?.thumb} alt="" />
                </div>
                <div className="col-lg-6 order-md-1 d-flex flex-column justify-content-center text-md-start">
                    <div>
                        <h1 className="display-4 fw-normal text-wrap text-capitalize">{detailedMeal?.title}</h1>
                        <p className="lh-lg pe-md-5 pt-5 text-secondary">{detailedMeal?.description}</p>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                        <div><h1>${detailedMeal?.price}</h1></div>
                        <div className="border border-2 d-flex ms-4 p-1 px-1 rounded-pill">
                            <button className="btn-custom bg-white border-0 ms-2 pe-3"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>  </button>
                            <h3 className="fw-normal text-secondary">10</h3>
                            <button className="btn-custom bg-white border-0 me-2 ps-3"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <Button className="btn btn-danger fs-5 fw-light px-4 py-2 rounded-pill"><FontAwesomeIcon icon={faShoppingCart} className="me-2"></FontAwesomeIcon> Add</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;