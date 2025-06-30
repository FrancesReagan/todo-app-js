// todo context manages task list and actions (add, toggle, etc.)//

import { createContext, useState, useContext, useEffect }  from "react";

const TodoContext = createContext()
export const useTodos = ()  => useContext (TodoContext)


export function TodoProvider({children}){
  const [todos, setTodos] = useState([])

  // addtTodo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      todotext, 
      completed:false }
      setTodos([...todos, newTodo])

    };
  
    //
      const toggleTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo)) 
    }
      

  // delete todo
   const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
   }

  // filter todo


  // edit todo
   const editTodo = (id,newText) => {
    setTodos(todos.map(todo => todo.id === id? {...todo, text:nextText}: todo))
   }


  return (
    <TodoContext.Provider value={{todos, addTodo, toggleTodo,deleteTodo, editTodo}}>
     {children}
    </TodoContext.Provider>
    

  );

}
