
import React, { Component } from 'react';
import Header from "./Header"

// JSX is Case-Sensitive bcoz Javascript id Case-Sensitive

class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <button> Add </button>
        <div>
          <span> Name </span> <br />
          <span> Phone </span>
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