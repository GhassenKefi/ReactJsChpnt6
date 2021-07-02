import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';


export default function Filter(props) {
    let movienameref = useRef(null);

    const [rating, setRating] = useState(0)

    const changeRating = (newRating) => {
        setRating(newRating)
    }
    const getSearchTerm = () => {
        handleStatusChange()
    }

    const moviesByName = (movies, searchTerm) => {
        const newMoviesList = movies.filter((movie) => {
            return (
                Object.values(movie.title).join("").toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
        return newMoviesList;
    }

    const moviesByRating = (movies) => {
        const newMoviesList = movies.filter((movie) => {
            return movie.rating >= rating * 2;
        })
        return newMoviesList;
    }

    const handleStatusChange = () =>{
        if ((movienameref.current.value.length === 0) && (rating === 0)) {
            props.resultOfSearch(props.movies)
        }
        else
            if ((movienameref.current.value.length > 0) && (rating === 0)) {
                let resultofsearchbyName = moviesByName(props.movies, movienameref.current.value)
                props.resultOfSearch(resultofsearchbyName)
            }
            else
                if ((movienameref.current.value.length === 0) && (rating !== 0)) {
                    let resultofsearchbyRate = moviesByRating(props.movies, rating)
                    props.resultOfSearch(resultofsearchbyRate)
                }
                else {
                    let resultofsearchbyRate = moviesByRating(props.movies, rating)
                    let resultofsearchbyName = moviesByName(resultofsearchbyRate, movienameref.current.value)
                    props.resultOfSearch(resultofsearchbyName)
                }
    }

    useEffect(() => {
        handleStatusChange();
    }, [rating, movienameref])

    return (
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    ref={movienameref}
                    onChange={getSearchTerm}
                />
                <StarRatings
                    rating={rating}
                    starRatedColor="goldenrod"
                    starHoverColor="goldenrod"
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="5px"
                    changeRating={changeRating}
                />
            </Form>
    )
}
