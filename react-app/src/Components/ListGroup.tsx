import { Fragment } from "react";
function ListGroup() {
  const items = [
    "Bihar",
    "Uttar Pradesh",
    "Karnataka",
    "Jharkhand",
    "Jammu and Kashmir",
  ];
  return (
    // <div> //We cannot use multiple components inside React thus we use a div tag to wrap them inside a single component
    // To use Fragment, is a better Idea
    //<Fragment> //The more Shortcut way to use Fragment is to use a <>
    <>
      <h1>list</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
    //</Fragment>
    //</div>
  );
}
export default ListGroup;
