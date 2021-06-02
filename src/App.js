
import React, { Component } from 'react';
import Header from "./Header"
import './App.css'

// JSX is Case-Sensitive bcoz Javascript id Case-Sensitive

// let subscribers = [
//   {
//     id: 1,
//     name1: 'Kamal',
//     phone1: '1111111111'
//   },
//   {
//     id: 2,
//     name1: 'Chamal',
//     phone1: '9999999999'
//   }
// ]

class App extends Component {

  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  render() {

    return (

      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <span className="grid-item action-btn-container">
                    <button className="custom-btn delete-btn">Delete</button>
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


export default App;


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