import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class OwnerList extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="header">
                    <h2>Owners</h2>
                </div>
                <div className="history-wrapper">
                    <table className="history-table">
                        <tr>
                            <th>Name</th>
                            <th>Number of Pets</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Delete</td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }
}
export default OwnerList;