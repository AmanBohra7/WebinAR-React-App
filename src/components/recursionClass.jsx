import React, { Component } from 'react';
import Dr from './dynamicReturn'
import NavBar from './NavBar';
import Card from './Card';

const RecursiveElement = (newChildElement) =>{
    //console.log("Got Recusion with: ",newChildElement.data);
    return <Dr child={true} data={newChildElement.data}  ></Dr>
}

export default RecursiveElement;


/*
{
    "body": [
        {   "tag":"a",
            "html":"9",
            "class":"",
            "style":"",
            "children":[
                {"tag":"span",
                "class":"badge",
                "html":"42",
                "style":"",
                "children:[]"}
                ]},
        {   "tag":"button",
            "class":"btn btn-primary",
            html:"Message",
            stlye="",
            "children":[
                {"tag":"span",
                "class":"badge",
                "html":"4",
                "children":[]}
                ]}
    ]
}
*/