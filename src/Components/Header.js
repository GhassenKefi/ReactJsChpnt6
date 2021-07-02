import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import Filter from './Filter';


const Header = (props) => {

    const resultOfSearchHandler = (val)=>{
        props.FilteredList(val)
    }

    return (
        <Navbar className="sticky" bg="light" variant="light">
            <Navbar.Brand href="#home" className="zoomTitle">TuniBest</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Filter movies={props.movies} resultOfSearch={resultOfSearchHandler}></Filter>
        </Navbar>
    )
}

export default Header