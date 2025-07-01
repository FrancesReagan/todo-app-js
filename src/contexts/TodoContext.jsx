// todocontext is the control center for the to-do list--it keeps track of all the tasks and gives other parts of the app
// tools to add, change, or delete---the main context for managing todo list and actions (add, toggle, etc.)//
// it stores a list of tasks --called todos--in a state box using useState
// each task is an object: {id: "222", text:"study react", completed: false}//
//it provides the functions to ---add a task, toggle a task as done or not, delete, edit, or clear completed tasks//
// it saves the task list to localStorage so that it does not disappear when browser is refreshed//
import { createContext, useState, useContext, useEffect }  from "react";

const TodoContext = createContext(null);

export function TodoProvider({children}) {
// lazy inital state---this function only runs once when the component first loads or mounts//
const [todos, setTodos] = useState(() => {   
  // localStorage logic---checks localStorage for saved todos from prev sessions, parses the JSON string back into
  // a javascript array, returns the saved todos if they exist and returns an empty array [] if no todos are saved
  // or if something goes wrong.----i.e. when the app first loads, try to get my saved todos from the browser's
  // memory. if that works, use those. if not, start with an empty list.//
  try {     
    return JSON.parse(localStorage.getItem("todos") || "[]");   
  } catch (error) {     
    console.error("Failed to parse todos:", error);     
    return [];   
  } 
});
  
  
// effect to save todos to localStorage whenever todos change//
useEffect(()=>{
  try {
    localStorage.setItem("todos",JSON.stringify(todos));
  } catch (error) {
      console.error("Failed to save todos:", error);
  }
}, [todos]);

// function to add a new todo//
  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
        id:crypto.randomUUID(),
        text,
        completed:false,
      },
      ]);
    }
  };

  // function to toggle todo completion status//
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo)=>
        todo.id === id?{...todo,completed: !todo.completed}:todo
    )
  );
};

// function to delete a todo//
const deleteTodo = (id) => {
  setTodos(todos.filter((todo)=>todo.id!==id));
};

// function to edit a todo//
const editTodo = (id,newText) => {
  setTodos(
    todos.map((todo) => 
      todo.id === id?{...todo,text:newText }:todo
  )
  );
};


// function to remove all completed todos//
const clearCompleted = () => {
  setTodos(todos.filter(todo=> !todo.completed));
};

// value object with all functions and state to share//
const value = {
  todos,
  addTodo,
  toggleTodo,
  deleteTodo, 
  editTodo, 
  clearCompleted
};

return (
<TodoContext.Provider value={value}>
  {children}
  </TodoContext.Provider>
);
}


export function useTodoContext(){
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}

// more notes on what the code does--to remember later----context creation---createContext(null) makes a shared
// notebook called TodoContext.  State with useState--- const[todos, setTodos]--is a box (todos) and a tool to update
// it (setTodos)...first check localStorage for saved tasks.  Save to localStorage---useEffect runs whenever todos
// changes--saving the list to localStorage ---it is akin to saving a file.//
// functions: addTodo--adds a new task to the list,as in writing a new note.
              // toggleTodo: this flips the completed flag, as in checking off a task//
              // deleteTodo: removes a task--crossing it out.//
// provider---<TodoContext.Provider value={value}> shares the notebook with all the components inside it--
// the (children).    Error handling---with try-catch blocks--this ensures that the app won't break if localStorage
// is having issues(if full or disabled).//