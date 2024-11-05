import React, { useState } from "react";
import { Navbar, Row, Nav, Form, Button, NavDropdown, Container } from "react-bootstrap";

const NavBar = ({filterbySearch}) => {
  const [searchVal, setSearchVal] = useState('')

  const onSearch=(e)=>{
    //Do not reload every time you search (e.preventDefault();) 
    e.preventDefault();
    filterbySearch(searchVal)
    setSearchVal('')
  }
  return (
    <Row>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث.."
                className="mx-2"
                onChange={(e)=> setSearchVal(e.target.value)}
                value={searchVal}
              />
              <button onClick={onSearch} className="btn-search">بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
