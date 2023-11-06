// import Message from "./Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = [
    "Bihar",
    "Uttar Pradesh",
    "Karnataka",
    "Jharkhand",
    "Jammu and Kashmir",
  ];
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
      {/* <ListGroup /> */}
    </div>
  );
}

export default App;
