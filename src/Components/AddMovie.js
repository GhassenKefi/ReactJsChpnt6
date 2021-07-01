import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useRef } from 'react';
import { useState } from 'react';

const AddMovie = ({ addMovieFn }) => {

    let movieNameRef = useRef(null);
    let movieDesRef = useRef(null);
    let movieRateRef = useRef(null);
    let moviePosterRef = useRef(null);

    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }

    const handleMovie = () => {
        let title = movieNameRef.current.value
        let desc = movieDesRef.current.value
        let rate = movieRateRef.current.value
        let poster = moviePosterRef.current.value


        let newMovie = {
            key: new Date(),
            title: title,
            description: desc,
            rating: rate,
            posterURL: poster
        }
        addMovieFn(newMovie)
        toggle()
    }
    //props.addFn
    return (
        <div className="AddMovie">
            <Button className="addMovieBtn" variant="primary" onClick={() => toggle()} >
                Add Movie
            </Button>

            <Modal
                show={show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}
                key={new Date()}
            >
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            key="title"
                            type="text"
                            placeholder="enter the title"
                            ref={movieNameRef}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="enter the description"
                            ref={movieDesRef}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rate out of 10</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="enter the rate"
                            ref={movieRateRef}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Poster Url</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="enter the image link"
                            ref={moviePosterRef}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => toggle()} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleMovie()} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie