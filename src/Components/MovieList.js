import React from 'react'
import MovieCard from './MovieCard';
import { Row } from 'react-bootstrap';
import NoMovie from './NoMovie';

export default function MovieList(props) {

    var Movies = props.movie;
    var MovieItems = Movies
        .map
        ((e) => <MovieCard key={e.key} movie={e}></MovieCard>);

    return (
        <div className="Content">
            {MovieItems.length > 0 ? 
                <div className="MovieList"><Row xs={1} md={3}> {MovieItems} </Row> </div> 
                :
                <NoMovie></NoMovie>
            }
        </div>
    )
}
