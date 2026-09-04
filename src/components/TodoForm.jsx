import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (text.trim() === "") {
            return;
        }

        addTodo(text.trim());
        setText("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />

            <button type="submit">
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;