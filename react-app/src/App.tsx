import Message from "./Message";


function App() {
  const name = 'Shivam'
  if (name)
    // return <div><Message/></div>
    return <h1>Hello {name} </h1>
  return <h1> Hello World!</h1>
}

export default App;