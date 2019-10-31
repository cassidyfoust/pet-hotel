import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class AddOwner extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="header">
                    <h2>Add Owner</h2>
                </div>
                <div className="add-pet-form">
                    <input placeholder="Owner Name" className="owner-form"></input>
                    <button>Submit</button>
                </div>
            </>
        )
    }
}
export default AddOwner;