import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component {
    state = { 
        style : this.props.data.style
     }

    retrunStyle = () =>{
        return {backgroundColor : this.state.style}
    }

    getContent = () =>{
        if(this.state.style === "") return "";
        else return "NavBar";
    }

    render() {
        return ( 
            <React.Fragment>
                <nav style={this.retrunStyle()} className="navbar navbar-light ">
                      <a className="navbar-brand">{this.getContent()}</a>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;
