import { useState } from 'react'
import "./styles.css"
// https://www.cognigy.com/get-demo?hsCtaTracking=2b0db1db-0059-4681-8525-a9164d442fcc%7C68ab807f-430c-4698-91dd-d30c73cdb50f
function App() {

  const [newItem, setNewItem] = useState(''); // '' is the initial state value
    const [todos, setTodos] = useState([]); // [] is the initial state value

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newItem);
        setTodos(currentTodos => {
            return [
                ...todos,
                {id: crypto.randomUUID(), title: newItem, complete: false}
            ]
        })

        setNewItem(''); // just to clear input
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
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                       value={newItem}
                       onChange={e => setNewItem(e.target.value)}
                       type="text"
                       id="item"/>
            </div>
            <button className="btn">Add</button>
            <h1 className="header"></h1>
            <ul className="list">

                {
                    // short-circuiting
                    todos.length === 0 && "No todos, yay!"}
                {todos.map(todo =>  {
                        return (
                            <li key={todo.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={e => toggleTodo(todo.id, e.target.checked)}
                                    />
                                    {todo.title}
                                    <button
                                        className="btn btn-danger"
                                        // must call it as function to avoid infinite loop
                                        onClick={() => deleteTodo(todo.id)}
                                    >Delete</button>
                                </label>
                            </li>
                        )
                    }
                )}

            </ul>
        </form>
    </>
  )
}

export default App
