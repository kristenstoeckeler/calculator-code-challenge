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

  setOperator = (event) => {
    console.log("here is target value", event.target.value);
    this.setState({
      operator: event.target.value,
    });
  };

  setValOne = (event) => {
    console.log(
      "here is target value 1 & operator",
      event.target.value,
      this.state.operator
    );
    this.setState({
      valOne: event.target.value,
    });
  };

  setValTwo = (event) => {
    console.log(
      "here is target value 2 & operator",
      event.target.value,
      this.state.operator
    );
    this.setState({
      valTwo: event.target.value,
    });
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
                value="+"
                onClick={(event) => this.setOperator(event, "operator")}
              >
                +
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="-"
                onClick={(event) => this.setOperator(event, "operator")}
              >
                -
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="*"
                onClick={(event) => this.setOperator(event, "operator")}
              >
                *
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="/"
                onClick={(event) => this.setOperator(event, "operator")}
              >
                /
              </Button>
            </Col>
          </Row>
        </Form>
        <Form className="inputs">
          <Row>
            <Col>
              <Form.Control
                onChange={(event) => this.setValOne(event, "valOne")}
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(event) => this.setValOne(event, "valTwo")}
              />
            </Col>
          </Row>
        </Form>

        <Form className="button">
          <Button variant="primary">Submit</Button>
        </Form>
      </>
    );
  }
}


export default Calculator;