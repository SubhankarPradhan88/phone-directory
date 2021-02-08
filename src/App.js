import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }
  render() {
    // Subscribers data list
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      },
      {
        id: 3,
        name: "Subhankar Pradhan",
        phone: "10000000000"
      }
    ];

    return (
      <div className="container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
        </div>
        <div className="infoWrapper">
          <span>Name</span> 
          <span>Phone</span>
        </div>
        {(this.state.subscribersListToShow && this.state.subscribersListToShow.length > 0) && this.state.subscribersListToShow.map(sub => {
          return (
            <div className="grid-container">
              <div className="infoWrapper" key={sub.id}>
                <div>{sub.name}</div>
                <div>{sub.phone}</div>
              </div>
              <button className="deleteBtn">Delete</button>
            </div>
          )})}
      </div>
    );
}};
    
export default App;