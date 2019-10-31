import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class PetHistory extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="header">
                    <h2>History</h2>
                </div>
                <div className="history-wrapper">
                    <table className="history-table">
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked In</th>
                            <th>Actions</th>
                        </tr>
                        {this.props.reduxState.petReducer.map((pet) => {
                            return (
                                <tr>
                                    <td>{pet.owner}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.breed}</td>
                                    <td>{pet.color}</td>
                                    <td>no</td>
                                    <td>Delete | Check In</td>
                                </tr>
                                    )
                                    }
                                )
                        }
                    </table>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps)(PetHistory);