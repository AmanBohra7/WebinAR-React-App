import React, { Component } from 'react';
import './testCSS/sample.css';

class Footer extends Component {
    state = { 
        style : this.props.data.style
     }

    getStyle = () =>{
        return {backgroundColor:this.state.style};
    }

  

    render() { 
        return ( 
            <footer className="footer text-center" style={this.getStyle()}>
                This is Footer!
            </footer>
         );
    }
}
 
export default Footer;