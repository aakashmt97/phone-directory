import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Raman Shah',
                phone: '999000'
            },
            {
                id: 2,
                name: 'Pawan Seth',
                phone: '000111'
            }]
        }
    }

    addSubscriberHandler = (newSub) => {
        let subscribers = this.state.subscribersList;
        if (subscribers.length > 0) {
            newSub.id = subscribers[subscribers.length - 1].id + 1;
        }
        else {
            newSub.id = 1;
        }
        subscribers.push(newSub);
        this.setState({ subscribersList: subscribers });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({ subscribers: newSubscribers });
    }

    render() {
        return (
            <Router>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} listOfSubscribers={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                <Route exact path='/add' render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Router>
        );
    }
}

export default PhoneDirectory;