import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./8_Todo_List";
import WordCounter from "./9_Word_Counter";
import LocalStorageLiftStateUp from "./10_Local_Storage_lift_state_up";
import LocalStorage from './12_Local_Storage';
import SelectAllCheckboxes from './14_Select_all_checkboxes';
import UseTheme from './15_useTheme';
import StyledButton from './16_Styled_Button';
import LocalStorageIIHook from './17_Local_Storage_II_Hook';
import LocalStorageIIIHook from './18_Local_Storage_III_Hook';

const Layout = () => {
    return (
        <>
            <h2>8. Todo-List</h2>
            <TodoList />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>9. Word-Counter</h2>
            <WordCounter />
            <hr color="red" />
            <hr color="blue" />

            <h2>10. Local-Storage-Lift-State-Up</h2>
            <LocalStorageLiftStateUp />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>12. LocalStorage</h2>
            <LocalStorage />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>14. Select-All-Checkboxes</h2>
            <SelectAllCheckboxes />
            <hr color="red" />
            <hr color="blue" />

            <h2>15. useTheme</h2>
            <UseTheme />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>16. Styled-Button</h2>
            <StyledButton />
            <br />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>17. Local-Storage-II-Hook</h2>
            <LocalStorageIIHook />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>18. Local-Storage-III-Hook</h2>
            <LocalStorageIIIHook />
            <br />
            <hr color="red" />
            <hr color="blue" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);