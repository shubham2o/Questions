import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./8_Todo_List";
import WordCounter from "./9_Word_Counter";
import LocalStorageLiftStateUp from "./10_Local_Storage_lift_state_up";

const Layout = () => {
    return (
        <>
            <h2>8.</h2>
            <TodoList />
            <br />
            <hr color="red" />
            <hr color="blue" />
            <h2>9.</h2>
            <WordCounter />
            <br />
            <hr color="red" />
            <hr color="blue" />
            <h2>10.</h2>
            <LocalStorageLiftStateUp />
            <br />
            <hr color="red" />
            <hr color="blue" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);