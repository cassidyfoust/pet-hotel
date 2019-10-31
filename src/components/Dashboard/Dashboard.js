import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPet from '../AddPet/AddPet'
import PetHistory from '../PetHistory/PetHistory';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <>
            <AddPet/>
            <PetHistory/>
            </>
        )
    }
}
export default Dashboard;