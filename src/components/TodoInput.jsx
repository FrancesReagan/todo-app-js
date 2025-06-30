import { useTodos } from "../contexts/TodoContext"


function TodoInput() {

  const [todoText, setTodoText] = useState("")
  const {addTodo} = useTodos()

 const handleSubmit = (e) => {
  e.preventDefault()
   addTodo(todoText)
   setTodoText("")
 }

  return (
 <form onSubmit= {handleSubmit}>
    <input value= {todoText} 
    onChange={(e) => setTodoText(e.target.value)}
    placeholder="Add todo"
    />
<button type = "submit">Add</button>
</form>

  )
}
export default TodoInput;