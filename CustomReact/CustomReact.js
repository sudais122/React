import { Children } from "react";

function customrender(React, MainContainer){
    /*const domelement = document.createElement(React.type);
    domelement.innerHTML = React.Children;
    domelement.setAttribute('href', React.props.href);
    domelement.setAttribute('target', React.props.target);
    MainContainer.appendChild(domelement);*/

    const domelement = document.createElement(React.type);
    domelement.innerHTML = React.Children;

    for (const prop in React.props) { 
        if(prop === 'Children') continue
        domelement.setAttribute(prop, React.props[prop]);
      }
}
const React = {
    type: 'a', //tell us the type of element 
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    Children: "Click me to go to Google"
}
const MainContainer = document.getElementById("Root");

customrender(React, MainContainer);