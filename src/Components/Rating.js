import React from 'react'
import StarRatings from 'react-star-ratings';

export default function Rating(props) {

    return (
        <StarRatings
            rating={props.Rating/2}
            starRatedColor="goldenrod"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="5px"
            style={{marginBottom:'15px'}}
        />
    );

}

