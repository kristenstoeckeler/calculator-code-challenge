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
    valOne: '',
    valTwo: '',
    operator: "?",
    result: 0,
  };


  componentDidMount() {
    this.setState({
      operator: this.state.operator,
      valOne: this.state.valOne,
      valTwo: this.state.valTwo,
      result: this.state.result,
    });
  }

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

  calculateAnswer = () => {

    console.log("in calculateAnswer");

    let calculation = 0;

    if (this.state.operator === "+") {
      calculation = Number(this.state.valOne) + Number(this.state.valTwo);
    } else if (this.state.operator === "-") {
      calculation = Number(this.state.valOne) - Number(this.state.valTwo);
    } else if (this.state.operator === "*") {
      calculation = Number(this.state.valOne) * Number(this.state.valTwo);
    } else {
      calculation = Number(this.state.valOne) / Number(this.state.valTwo);
    }

    this.setState({
      result: calculation,
    });

    this.props.dispatch({
      type: "POST_CALCULATION",
      payload: { state: this.state, result: calculation }
    });

    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      valOne: '',
      valTwo: '',
    });
  }

  render() {
    console.log("here is result:", this.state.result);
    return (
      <>
        <h1>Calculator</h1>
        <p>Make a calculation!</p>
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
                value={this.state.valOne}
                type="number"
                onChange={(event) => this.setValOne(event, "valOne")}
              />
            </Col>
            <Col>
              <Form.Control
                value={this.state.valTwo}
                type="number"
                onChange={(event) => this.setValTwo(event, "valTwo")}
              />
            </Col>
          </Row>
        </Form>

        <Form className="button">
          <Button variant="primary" onClick={(event) => this.calculateAnswer()}>
            Calculate
          </Button>
        </Form>
      </>
    );
  }
}


export default connect()(Calculator);