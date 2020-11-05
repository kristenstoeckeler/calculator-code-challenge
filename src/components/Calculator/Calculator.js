//importing React and Component for class Component 
import React, { Component } from "react";

//importing Connect for retrieving reduxStore on state
import { connect } from "react-redux";

//will use these for calculator form
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './Calculator.css';


class Calculator extends Component {
    state = {
        valOne: 0,
        valTwo: 0,
        operator: "?",
        result: 0,
    };



  render() {
    return (
      <>
        <h1>Here is Calculator</h1>
        <Form className="button">
          <Row>
            <Col>
              <Button
                variant="primary"
              >
                +
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
              >
                -
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
              >
                *
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
              >
                /
              </Button>
            </Col>
          </Row>
        </Form>
        <Form className="inputs">
          <Row>
            <Col>
              <Form.Control/>
            </Col>
            <Col>
              <Form.Control/>
            </Col>
          </Row>
        </Form>

        <Form className="button">
          <Button variant="primary">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}


export default Calculator;