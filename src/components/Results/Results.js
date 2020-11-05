//importing React and Component for class Component
import React, { Component } from "react";

//importing Connect for retrieving reduxStore on state
import { connect } from "react-redux";

class Results extends Component {


    render(){
        return(
            <>
            <h1>Here are Results</h1>
            </>
        );
    }
}



const putReduxStateOnProps = (reduxStore) => ({
  calculation: reduxStore.user,
});

export default connect(putReduxStateOnProps)(Results);