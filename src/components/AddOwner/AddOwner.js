import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class AddOwner extends Component {
    state = {
        ownerToAdd: {
            name: '',
        }
    }

    setNewOwner = (event) => {
        this.setState({
            ownerToAdd: {
                ...this.state.ownerToAdd,
                name: event.target.value
            }
        })
    }

    addNewOwner = () => {
        console.log('the owner to add is:', this.state.ownerToAdd)
        this.props.dispatch({ type: 'NEW_OWNER', payload: this.state.ownerToAdd })
    }

    render() {
        return (
            <>
                <div className="header">
                    <h2>Add Owner</h2>
                </div>
                <div className="add-pet-form">
                    <input placeholder="Owner Name" className="owner-form" onChange={(event) => this.setNewOwner(event)}></input>
                    <button onClick={this.addNewOwner}>Submit</button>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps)(AddOwner);