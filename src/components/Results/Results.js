//importing React and Component for class Component
import React, { Component } from "react";

//importing Connect for retrieving reduxStore on state
import { connect } from "react-redux";


import "./Results.css";

class Results extends Component {
  state = {
    // valOne: this.props.calculation.val1,
    // valTwo: this.props.calculation.val2,
    // operator: this.props.calculation.operator,
    // result: this.props.calculation.result,
  };

  componentDidMount() {
    this.props.dispatch({ 
        type: "FETCH_RESULTS"
    });
  }


  render() {
    return (
      <>
        <h3>Result:</h3>
        {this.props.results[0] ? (
          <p>
            {this.props.results[0].val1}

            {this.props.results[0].operator}

            {this.props.results[0].val2} = {this.props.results[0].result}
          </p>
        ) : (
          ""
        )}

        <h4>Here are the most recent calculations made:</h4>
        <ul>
          {this.props.results.map((equation) => {
            return (
              <>
                <li key={equation.id}>
                  {equation.val1} {equation.operator} {equation.val2} ={" "}
                  {equation.result}
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}



const putReduxStateOnProps = (reduxStore) => ({
  results: reduxStore.results
});

export default connect(putReduxStateOnProps)(Results);