// https://codedamn.com/problem/PrHZCRS80DE9DrfyxBJwT

import React, { useState, useEffect } from 'react';

const useTodoList = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos !== null ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: todos.length + 1,
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return { todos, addTodo, removeTodo, toggleTodo };
};

const LocalStorageIIIHook = () => {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e.target.elements.todoText.value);
        e.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoText" />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ 'text-decoration': `${todo.completed ? 'line-through' : 'none'}` }}
                    >{todo.text}
                        <button
                            onClick={() => removeTodo(todo.id)}
                        > Remove
                        </button>

                        <button onClick={() => toggleTodo(todo.id)}
                        >{todo.completed ? 'Incomplete' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocalStorageIIIHook;