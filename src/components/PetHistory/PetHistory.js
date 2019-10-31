import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class PetHistory extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="header">
                    <h2>Add Pet</h2>
                </div>
                <div className="add-pet-form">
                    <input placeholder="Pet Name" className="pet-form"></input>
                    <input placeholder="Pet Color" className="pet-form"></input>
                    <input placeholder="Pet Breed" className="pet-form"></input>
                    <select className="pet-form">
                        <option>Test 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </select>
                    <button>Submit</button>
                </div>
            </>
        )
    }
}
export default PetHistory;