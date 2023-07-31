import { useState } from 'react'
import "./styles.css"
import { NewTodoForm } from './NewTodoForm.jsx';
import { TodoList } from './TodoList.jsx';
// https://www.cognigy.com/get-demo?hsCtaTracking=2b0db1db-0059-4681-8525-a9164d442fcc%7C68ab807f-430c-4698-91dd-d30c73cdb50f
function App() {


  const [todos, setTodos] = useState([]); // [] is the initial state value

    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...todos,
                {id: crypto.randomUUID(), title, complete: false}
            ]
        })
    }

    function toggleTodo(id, complete) {
        setTodos(currentTodos => {
            return currentTodos.map( todo => {
              if (todo.it == id) {
                  todo.complete = completed
                  return {...todo, completed}
              }
              return todo
            })

        })
    }

    function deleteTodo(id) {
        setTodos (currentTodos => {
          return currentTodos.filter(todo => todo.id !== id )
        })
    }

  return (
    <>
        <NewTodoForm onSubmit={addTodo} />
        <h1 className="header"></h1>
        <TodoList todos={todos} />
    </>
  )
}

export default App
