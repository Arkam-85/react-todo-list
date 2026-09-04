function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className={todo.completed ? "completed" : ""}>
            <span
                onClick={() => toggleTodo(todo.id)}
                className="todo-text"
            >
                {todo.text}
            </span>

            <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;