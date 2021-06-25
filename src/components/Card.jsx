import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               <div className="card col-4" style={{width: "10rem"}}>
               <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg" className="card-img-top" alt="..."></img>
               <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			    <a className="btn btn-primary">Go somewhere</a>
			  </div>
               </div>
            </React.Fragment>
         );
    }
}
 
export default Card;