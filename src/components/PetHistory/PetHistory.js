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
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Delete | Check In</td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }
}
export default PetHistory;