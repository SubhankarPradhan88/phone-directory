import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Subhankar Pradhan',
                phone: '9999999999'
            },
            {
                id: 2,
                name: 'Sudiptp Pradhan',
                phone: '8888888888'
            }]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList});
    }
    render() {
        return(
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} />} />
                    <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;