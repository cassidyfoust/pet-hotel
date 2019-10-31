import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ManageOwners from './components/ManageOwners/ManageOwners'

class App extends Component {
  state = {
    dashboardDisplay: true
  }

  viewDashboard = () => {
    this.setState({
      dashboardDisplay: true
    })
  }
  viewOwners = () => {
    this.setState({
      dashboardDisplay: false
    })
  }

  render() {
    if (this.state.dashboardDisplay){
      return (
        <>
          <div className="App">
            <header className="App-header">
              Pet Hotel
      </header>
            <body>
              <div className="toggle-view">
                <button className="toggleBtnOn" onClick={this.viewDashboard}>Dashboard</button>
                <button className="toggleBtnOff" onClick={this.viewOwners}>Manage Owners</button>
              </div>
              <Dashboard />
            </body>
          </div>
        </>
      );
    }
    else {
        return (
          <>
            <div className="App">
              <header className="App-header">
                Pet Hotel
      </header>
              <body>
                <div className="toggle-view">
                  <button className="toggleBtnOff" onClick={this.viewDashboard}>Dashboard</button>
                  <button className="toggleBtnOn" onClick={this.viewOwners}>Manage Owners</button>
                </div>
                <ManageOwners/>
              </body>
            </div>
          </>
        );
    }
  }
}
export default App;
