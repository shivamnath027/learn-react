//PascalCasing
function Message() {
  // SYNTAX USED IS: JSX JavaScrpt XML
  // return <h1> Hello world</h1>;
  //Under the hood it's gonna get compiled to JavaScript
  const name = "Shivam";
  if (name)
    // return <div><Message/></div>
    return <h1>Hello {name} </h1>;
  return <h1> Hello World!</h1>;
}
export default Message;
