import React, { Component } from 'react';
import './Header.css'

const Header = function (props) {

    return (
        <div className="header">  {/* "class" in HTML == "className" in JSX */}
            {props.heading}
        </div>
    )
}

// class Header extends Component {

//     render() {
//         return (
//             <div className="header" >
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header