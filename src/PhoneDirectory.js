import React, {Component} from 'react';
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
    addSubscriber = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList});
        console.log(this.state.subscribersList);
    }
    render() {
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriber} />
            <ShowSubscribers subscribersList = {this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;