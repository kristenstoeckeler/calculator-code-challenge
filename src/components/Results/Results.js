//importing React and Component for class Component
import React, { Component } from "react";

//importing Connect for connecting to Redux and Store
import { connect } from "react-redux";

//importing style file
import "./Results.css";

//class component
class Results extends Component {
//dispatching to resultSaga to retrieve data from database for initial render
  componentDidMount() {
    this.props.dispatch({ 
        type: "FETCH_RESULTS"
    });
  }

  render() {
    return (
      <>
        <h3>Result:</h3>
        {/* conditional ternary operator to conditionally render data from props. used to circumvent async problem*/}
        {this.props.results[0] ? (
          <p>
            {this.props.results[0].val1}

            {this.props.results[0].operator}

            {this.props.results[0].val2} = {this.props.results[0].result}
          </p>
        ) : (
          ""
        )}

        <h3>Here are the most recent calculations made:</h3>
        <ul>
        {/* mapping over results array from props to render all data from GET request to database */}
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


//retrieving props from reduxStore
const putReduxStateOnProps = (reduxStore) => ({
  results: reduxStore.results
});

//exporting Results component and connecting to Redux
export default connect(putReduxStateOnProps)(Results);