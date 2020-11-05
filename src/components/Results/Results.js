//importing React and Component for class Component
import React, { Component } from "react";

//importing Connect for retrieving reduxStore on state
import { connect } from "react-redux";

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
        <h1>Here are Results</h1>
        <ul></ul>
      </>
    );
  }
}



const putReduxStateOnProps = (reduxStore) => ({
  calculation: reduxStore.user,
});

export default connect(putReduxStateOnProps)(Results);