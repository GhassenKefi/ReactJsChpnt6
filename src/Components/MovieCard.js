import React from 'react'
import { Card,Col } from 'react-bootstrap'
import Rating from './Rating'

export default function MovieCard(props) {

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.movie.posterURL} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.description}
                    </Card.Text>
                </Card.Body>
                <div className="MovieRating">
                <Rating Rating={props.movie.rating}></Rating>
                </div>
            </Card>
        </Col>
    )
}
