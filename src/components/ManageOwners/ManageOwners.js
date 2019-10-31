import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerList from '../OwnerList/OwnerList';
import AddOwner from '../AddOwner/AddOwner';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class ManageOwners extends Component {
    state = {}
    render() {
        return (
            <>
            <AddOwner/>
            <OwnerList/>
            </>
        )
    }
}
export default ManageOwners;