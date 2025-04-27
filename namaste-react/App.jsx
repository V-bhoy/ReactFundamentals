import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title.jsx";
import ChipsInput from "./coding-problems/ChipsInput";
import Accordian from "./coding-problems/Accordian";
import ProgressBar from "./coding-problems/ProgressBar";

// core react element
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")
// console.log(heading); // this is a React element which is a plain js object that describes the DOM node
// this will not print the element but an object


// lets render a nested react elements
const parent = React.createElement("div", {id: "parent"},
                        React.createElement("div", {id: "child"},
                             [
                                 React.createElement("h1", null, "Hello again!"),
                                 React.createElement("h2", null, "I am an h2 tag")
                             ]
                        )
                )
// As we continue to nest more elements into the parent element
// It becomes more complicated, difficult to understand and maintain
// What is the solution ? JSX

// console.log(parent); // this is also a plain javascript object which has nested objects within it.
// if there are any child elements into our root node, it will get replaced by the React element
// that is passed in the render method
// Any html elements above or below the root element stay as it is in the body.
// This means react only works in the target root element, it can be anything ,div, footer, header anything.

// react element using JSX
// importing Title from .jsx file because vite does not allow to use jsx in js file
// const headingJsx = <h1>Hello</h1>;
// console.log(Title()); //--> this log the React element only that is the JS object. It returns a pure React element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/*<ChipsInput/>*/}
        {/*<Accordian/>*/}
        <ProgressBar/>
    </React.StrictMode>);