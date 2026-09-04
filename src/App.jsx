import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos((previousTodos) => [
            ...previousTodos,
            newTodo
        ]);
    };

    const toggleTodo = (id) => {
        setTodos((previousTodos) =>
            previousTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((previousTodos) =>
            previousTodos.filter((todo) => todo.id !== id)
        );
    };

    const completedCount = todos.filter(
        (todo) => todo.completed
    ).length;

    return (
        <div className="app">
            <div className="todo-container">
                <h1>My To-Do List</h1>

                <p className="subtitle">
                    Manage your daily tasks with React
                </p>

                <TodoForm addTodo={addTodo} />

                <div className="todo-info">
                    <span>Total: {todos.length}</span>
                    <span>Completed: {completedCount}</span>
                </div>

                <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    );
}

export default App;