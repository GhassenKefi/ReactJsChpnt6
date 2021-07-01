import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useRef,useState } from 'react';
import StarRatings from 'react-star-ratings';


export default function Filter(props) {
    let movienameref = useRef(null);

    const [rating,setRating]= useState(0)

    const changeRating = (newRating) => {
        setRating(newRating)
        console.log('New rating filter '+newRating*2)
        props.getRatingTerms(rating*2)
        console.log('rating filter '+rating*2)
    }

    const getSearchTerm = () => {
        props.getSearchTerms(movienameref.current.value)
    }


    return (
        <div>

            <Form inline className="searchform">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    ref={movienameref}
                    value={props.terms}
                    onChange={getSearchTerm}
                />
                <StarRatings
                    rating={rating}
                    starRatedColor="goldenrod"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="5px"
                    changeRating={changeRating}
                    value={props.Rates}
                />
            </Form>
        </div>
    )
}
