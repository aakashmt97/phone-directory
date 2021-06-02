
import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';

// JSX is Case-Sensitive bcoz Javascript id Case-Sensitive

class ShowSubscribers extends Component {

  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }


  render() {
    return (

      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add"> <button className="custom-btn add-btn">Add</button> </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.props.listOfSubscribers.map(sub => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <span className="grid-item action-btn-container">
                    <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                  </span>
                </div>
              )
            })
          }

        </div>
      </div>
    );
  }
}


export default ShowSubscribers;


  // render() {
  //   return (

  //     /* This is JSX code */
  //     <div id="module1">
  //       <p>REACT JS</p>
  //     </div>


  //     /* This is JavaScript code.  React.createElement(element_name, element_properties, children); */
  //     React.createElement("div", { id: "module" },
  //       React.createElement("p", null, "ReactJS")
  //     )
  //   );
  // }