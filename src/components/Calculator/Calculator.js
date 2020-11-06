//importing React and Component for class component from React
import React, { Component } from "react";

//importing Connect for dispatching to Redux
import { connect } from "react-redux";

//imports from React-Bootstrap for form
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//importing style file
import './Calculator.css';

//class component
class Calculator extends Component {
  //setting state
  state = {
    valOne: "",
    valTwo: "",
    operator: "",
    result: 0,
  };

  //function capturing value from operator buttons on state
  setOperator = (event) => {
    //setting state with value from button
    this.setState({
      operator: event.target.value,
    });
  };

  //function capturing value from first number input on state
  setValOne = (event) => {
    //setting state with value from first number
    this.setState({
      valOne: event.target.value,
    });
  };

  //function capturing value from second number input on state
  setValTwo = (event) => {
    //setting state with value from first number
    this.setState({
      valTwo: event.target.value,
    });
  };

  //function calculating result of equation
  calculateAnswer = () => {
    //declaring local variable for result
    let calculation = 0;

    //if-then statement to determine operator and perform corresponding mathematical procedure on values 
    if (this.state.operator === "+") {
      calculation = Number(this.state.valOne) + Number(this.state.valTwo);
    } else if (this.state.operator === "-") {
      calculation = Number(this.state.valOne) - Number(this.state.valTwo);
    } else if (this.state.operator === "*") {
      calculation = Number(this.state.valOne) * Number(this.state.valTwo);
    } else {
      calculation = Number(this.state.valOne) / Number(this.state.valTwo);
    }
    
    //setting result to state, may not be necessary on account of dispatching calculation variable below??
    this.setState({
      result: calculation,
    });

    //dispatching state and calculation variable to calculationSaga
    this.props.dispatch({
      type: "POST_CALCULATION",
      payload: { state: this.state, result: calculation },
    });

    //calling resetInputs function
    this.resetInputs();
  };

  //function to reset state to null values to empty inputs
  resetInputs = () => {
    this.setState({
      valOne: "",
      valTwo: "",
      operator: "",
    });
  };

  render() {
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
                //onClick event runs setOperator function with designated value
                onClick={(event) => this.setOperator(event, "operator")}
              >
                +
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="-"
                //onClick event runs setOperator function with designated value
                onClick={(event) => this.setOperator(event, "operator")}
              >
                -
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="*"
                //onClick event runs setOperator function with designated value
                onClick={(event) => this.setOperator(event, "operator")}
              >
                *
              </Button>
            </Col>
            <Col>
              <Button
                variant="primary"
                value="/"
                //onClick event runs setOperator function with designated value
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
                //onChange event runs setValOne function with designated value
                onChange={(event) => this.setValOne(event, "valOne")}
              />
            </Col>
            <Col>{this.state.operator}</Col>
            <Col>
              <Form.Control
                value={this.state.valTwo}
                type="number"
                // onChange event runs setValTwo function with designated value
                onChange={(event) => this.setValTwo(event, "valTwo")}
              />
            </Col>
          </Row>
        </Form>
        <Form className="button">
          {/*onClick event runs calculateAnswer function with values already set to state */}
          <Button variant="primary" onClick={() => this.calculateAnswer()}>
            Calculate
          </Button>
        </Form>
      </>
    );
  }
}

//exporting Calculator component and connecting to Redux
export default connect()(Calculator);