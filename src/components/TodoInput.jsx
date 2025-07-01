// TodoInput.jsx is the component for add  new tools---it is the task adder---it shows an input box and a button
// to add new tasks---it uses useTodoContext to get the addTodo function and call it when user submits a task.//
// putting export default at the beginning //

// import react hook for managing component state....and custom hook to access todo context//
import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext"


export default function TodoInput() {
// state to track what the user types in the input field//
  const [input, setInput] = useState("")
  // get addTodo function from TodoContext to add  new todos//
  const {addTodo} = useTodoContext();


  // function to handle form submission//
 const handleSubmit = (e) => {
  // prevents the page from refreshing//
  e.preventDefault()  
  // add the todo with the current input text//
   addTodo(input);
  //  clear input field//
   setInput("");
 };

  return (
 <form onSubmit= {handleSubmit} style={{ marginBottom: "20px" }}>
    <input 
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="What needs to be done?"
    style={{ padding: "8px", width: "70%" }}
    />
<button type ="submit" style={{ padding: "8px" }}>
  Add Todo
  </button>
</form>
  );
}

// more notes on TodoInput component: state--const[input, setInput] holds what user types in the input box and has a
// tool --setInput--to update the box.  context---useTodoContext--grabs the addTodo function from the shared notebook.
// form--when user submits the form(by clicking the button) --it calls addTodo and clears the input.//