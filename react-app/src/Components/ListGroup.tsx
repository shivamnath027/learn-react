import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

// { items: [], heading : string }
interface Props {
  items: string[];
  heading: string;
}
function ListGroup(props: Props) {
  // let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // arr[0]; // variable {selectedIndex}
  // arr[1]; //updater function
  // items = [];

  // const handleClick = (event: MouseEvent) => console.log(event);
  //                                               WRITE event. here to know more about other events

  return (
    // <div> //We cannot use multiple components inside React thus we use a div tag to wrap them inside a single component
    // To use Fragment, is a better Idea
    //<Fragment> //The more Shortcut way to use Fragment is to use a <>
    <>
      <h1>list</h1>
      {/* { items.length===0 ? <p>No items found</p> : null}; */}
      {props.items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          //here we have mapped index
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
            }}
            // onClick={(event) => console.log(event)} // SYNTHETIC BASE EVENT
            // onClick={() => console.log(item,index)}
            //here we have printed the index that is mapped to each Item in the List
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
    //</div>
  );
}
export default ListGroup;
