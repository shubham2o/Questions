// https://codedamn.com/problem/7ISrqgpr3I62iv-UKUcRh

import { useState } from "react";

const TodoList = () => {
    let key = 0;

    const [currentTodo, setCurrentTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, currentTodo]);
        setCurrentTodo('');
    }

    return (
        <div>
            <input
                type="text"
                value={currentTodo}
                onChange={(e) => setCurrentTodo(e.target.value)}
            />

            <button onClick={addTodo}>Add a todo</button>

            <ul>
                {todos.map(el =>
                    <li key={key++}>{el}</li>
                )}
            </ul>
        </div>
    )
}

export default TodoList;