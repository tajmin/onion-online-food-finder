import React, { useEffect, useState } from 'react';
import { Row, Tab, Tabs } from 'react-bootstrap';
import useMeals from '../../../hooks/useMeals';
import Meal from '../../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useMeals();
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [key, setKey] = useState('lunch');

    const handleFilterMeals = (cat) => {
        const newMeals = meals.filter(meal => meal.category === cat)
        setFilteredMeals(newMeals);
        setKey(cat);
    }

    useEffect(() => {
        console.log(key);
        const newMeals = meals?.filter(meal => meal.category === key)
        setFilteredMeals(newMeals);
        console.log(newMeals, "---");

    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="fs-1">Meals</h1>
                <Tabs id="controlled-tab-example" activeKey={key}
                    onSelect={(cat) => handleFilterMeals(cat)}
                    className="mb-3 py-4 justify-content-center border-0"
                >
                    <Tab eventKey="breakfast" title="Breakfast">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                filteredMeals?.map(meal => <Meal
                                    key={meal.id} meal={meal}
                                ></Meal>
                                )
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="lunch" title="Lunch">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                filteredMeals?.map(meal => <Meal
                                    key={meal.id} meal={meal}
                                ></Meal>
                                )
                            }
                        </Row>
                    </Tab>
                    <Tab eventKey="dinner" title="Dinner">
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                filteredMeals?.map(meal => <Meal
                                    key={meal.id} meal={meal}
                                ></Meal>
                                )
                            }
                        </Row>
                    </Tab>
                </Tabs>


            </div>

        </div >
    );
};

export default Meals;