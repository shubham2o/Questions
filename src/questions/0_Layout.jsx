import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./8_Todo_List";
import WordCounter from "./9_Word_Counter";

const Layout = () => {
    return (
        <>
            <br />
            <TodoList />
            <br />
            <hr color="red" />
            <hr color="blue" />
            <br />
            <WordCounter />
            <br />
            <hr color="red" />
            <hr color="blue" />
            <br />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);