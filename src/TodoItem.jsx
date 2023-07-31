export function  TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {

    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
                <button
                    className="btn btn-danger"
                    // must call it as function to avoid infinite loop
                    onClick={() => deleteTodo(id)}
                >Delete</button>
            </label>
        </li>
    )
}