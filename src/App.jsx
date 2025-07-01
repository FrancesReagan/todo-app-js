// the main page--the main component that brings it all together//
// putting export default App function at the beginnning//
// putting all the components on the screen in order: title,theme button, input, filter buttons, task-list, and clear button.//
// uses the useTodoContext to get clearCompleted function for the clear button//

import "./App.css"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { useTodoContext } from "./contexts/TodoContext";  


export default function App(){
  // get clearCompleted function from Todo Context//
  const {clearCompleted} = useTodoContext();

 return (
 <div className="app">
  <h1>Todo App(Context API)</h1>
  <ThemeToggleButton/>
  <TodoInput />
  <FilterButtons />
  <TodoList />
  
  <button onClick={clearCompleted}>Clear Completed</button>
 </div>
 );
}
