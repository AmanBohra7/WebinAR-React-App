import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Rc from './recursionClass'
import Card from './Card';


class dynamicReturn extends Component {
    state = { 
        tagName : this.props.data.tagName,
        class : this.props.data.className,
        content : this.props.data.content,
        style: this.props.data.style,
        children : this.props.data.children
     }

     componentDidMount(){
       // console.log("Got with: ",this.props);
     }

    
    registerClassName = () =>{
        return this.state.className;
    }   

    returnStyle = () =>{
        if( String(this.state.tagName) === "footer" ){
            
            return {backgroundColor: this.state.style}
        }
        return {};
    }

    render() { 
        return (
            // <this.state.tagName className={this.registerClassName()} >{this.state.content}</this.state.tagName>
            <this.state.tagName style={this.returnStyle()} className={this.state.class}>
                {this.state.content} 
                {this.state.children.map( (newItem,ind) => {
                    if(newItem.tagName == "Card") return <Card key={ind}></Card>
                    return <Rc child={true} data={newItem} key={ind} ></Rc>
                } )}
            </this.state.tagName>
         );
    }
}
 
export default dynamicReturn;