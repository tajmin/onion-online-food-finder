import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Meal = (props) => {
    const { id, title, description, price, thumb } = props.meal;
    let history = useHistory();
    const url = `/meal-details/${id}`;

    const handleShowDetails = () => {
        history.push(url)
    }

    return (
        <>
            <Col>
                <Card className="h-100 p-2 shadow border-0" onClick={handleShowDetails} style={{ cursor: 'pointer' }}>
                    <Card.Img variant="top" src={thumb} className="w-75 mx-auto p-3" />
                    <Card.Body>
                        <Card.Title className="text-capitalize">{title}</Card.Title>
                        <Card.Text>{description.slice(0, 50)}</Card.Text>
                        <Card.Title>${price}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Meal;