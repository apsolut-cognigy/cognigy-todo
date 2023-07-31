export function  TodoList ({ todos}) {

    return (
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
                                    //onChange={e => toggleTodo(todo.id, e.target.checked)}
                                />
                                {todo.title}
                                <button
                                    className="btn btn-danger"
                                    // must call it as function to avoid infinite loop
                                    //onClick={() => deleteTodo(todo.id)}
                                >Delete</button>
                            </label>
                        </li>
                    )
                }
            )}

        </ul>
    )
}