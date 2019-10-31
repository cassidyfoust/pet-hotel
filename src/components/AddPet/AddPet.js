import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class AddPet extends Component {
    state = {
        petToAdd: {
            name: '',
            color: '',
            breed: '',
            owner: '',
            checkedIn: false
        }
    }

    setPet = (property, event) => {
        this.setState({...this.state,
            petToAdd: {
                ...this.state.petToAdd,
                [property]: event.target.value
            }
        })
    }

    addPet = () => {
        console.log('the pet to add is:', this.state.petToAdd)
        this.props.dispatch({type: 'ADD_PET', payload: this.state.petToAdd})
    }

    render() {
        return (
            <>
            <div className="header">
                <h2>Add Pet</h2>
                </div>
            <div className="add-pet-form">
                <input placeholder="Pet Name" className="pet-form" onChange={(event) => this.setPet('name', event)}></input>
                    <input placeholder="Pet Color" className="pet-form" onChange={(event) => this.setPet('color', event)}></input>
                    <input placeholder="Pet Breed" className="pet-form" onChange={(event) => this.setPet('breed', event)}></input>
                    <select className="pet-form" onChange={(event) => this.setPet('owner', event)}>
                    <option>Owner Name</option>
                        {this.props.reduxState.ownerReducer.map((owner) => {
                            return (
                                <option>
                                    {owner.name}
                                </option>
                            )
                        })
                        }
                </select>
                <button onClick={this.addPet}>Submit</button>
            </div>
            </>
        )
    }
}
export default connect(mapStateToProps)(AddPet);