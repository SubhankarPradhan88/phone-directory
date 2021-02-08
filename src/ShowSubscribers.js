import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import './ShowSubscribers.css';

class ShowSubscribers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Subscribers data list
    return (
      <div className="container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
        </div>
        <div className="infoWrapper">
          <span>Name</span> 
          <span>Phone</span>
        </div>
        {(this.props.subscribersList && this.props.subscribersList.length > 0) && this.props.subscribersList.map(sub => {
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
    
export default ShowSubscribers;