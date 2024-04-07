// LandingPage.js
import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Card,
    Form,
    Image,
} from "react-bootstrap";
import "./styles.css";
import "./landing.css";
import bruhImage from "./img/bruh.jpeg";

const homePage = () => {
    return (
        <Container fluid>
            <Row>
                <Nav>
                    <Navbar>
                        <Navbar.Brand>Study Grind</Navbar.Brand>
                    </Navbar>
                </Nav>
            </Row>
        </Container>

    );

}