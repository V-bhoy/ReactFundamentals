const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")
// console.log(heading); // this is a React element which is a plain js object that describes the DOM node
// this will not print the element but an object

// lets render a nested html elements
const parent = React.createElement("div", {id: "parent"},
                        React.createElement("div", {id: "child"},
                             [
                                 React.createElement("h1", null, "I am an h1 tag"),
                                 React.createElement("h2", null, "I am an h2 tag")
                             ]
                        )
                )
// As we continue to nest more elements into the parent element
// It becomes more complicated, difficult to understand and maintain
// What is the solution ? JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// console.log(parent); // this is also a plain javascript object which has nested objects within it.
// if there are any child elements into our root node, it will get replaced by the React element
// that is passed in the render method
// Any html elements above or below the root element stay as it is in the body.
// This means react only works in the target root element, it can be anything ,div, footer, header anything.