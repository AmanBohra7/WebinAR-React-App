import React, { Component } from 'react';
import axios from 'axios';
import Dr from './components/dynamicReturn'
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './components/response.json';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Card from './components/Card';

class App extends Component {

  constructor(){
    super();
    this.state = { 
        tags: {
          names:[],
          content:[]
        },
        shit : "Card"
    }
  }


  callThisLoadFunction = () =>{
    // axios.get("http://localhost:5000/test")
    //   .then( res => {
        
    //   }).catch(err => {
    //     console.log("test" , err);
    //   });
  }


  render() { 
    return ( 
        <React.Fragment>
            
            {
              jsonData.NavBar.map( (newTag,index) =>{
                return <NavBar data={newTag} key={index} ></NavBar>
              } )
            }

            {/* {this.callThisLoadFunction()} */}
            {
              jsonData.body.map( 
                (newTag , index) => {
                  // return <h1>TEST</h1>
                  return <Dr child={true} data={newTag} key={index} ></Dr>
                }
               )
            }

            {
              jsonData.footer.map( (newTag,index) =>{
                return <Footer data={newTag} key={index} ></Footer>
              } )
            }



        </React.Fragment>
    );
  }
}
 
export default App;

// React.createElement(tag , null , 
//   this.returnContent())

/* 
{
    "tags": {
        "names": [
            "h1",
            "p"
        ],
        "content": [
            "i am a header",
            "i am a paragraph"
        ]
    }
}
*/