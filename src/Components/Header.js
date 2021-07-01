import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import Filter from './Filter';


const Header = (props) => {

    const getSearchTerms = (val) => {
        props.searchKeyword(val)
    };

    const getRatingTerms= (val)=>{
        props.searchRate(val)
        console.log('Header : '+val)
    }

    return (
        <Navbar className="sticky" bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Filter getSearchTerms={getSearchTerms} getRatingTerms={getRatingTerms} terms={props.term} Rates={props.rate}></Filter>
        </Navbar>
    )
}

export default Header