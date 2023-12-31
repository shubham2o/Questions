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
import SubmitMessages from './19_Submit_Messages';
import WindowDimensionsHook from './20_Window_Dimensions_Hook';
import ProgressBar from './21_Progress_Bar';
import TabBar from './22_Tab_Bar';
import ValidateSignUpForm from './23_Validate_Sign_Up_Form';
import LabelFiltersDashboard from './25_Label_Filters_Dashboard';

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

            <h2>12. Local-Storage</h2>
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

            <h2>19. Submit-Messages</h2>
            <SubmitMessages />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>20. Window-Dimensions-Hook</h2>
            <WindowDimensionsHook />
            <hr color="red" />
            <hr color="blue" />

            <h2>21. Progress-Bar</h2>
            <ProgressBar />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>22. Tab-Bar</h2>
            <TabBar />
            <br />
            <br />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>23. Validate-Sign-Up-Form</h2>
            <ValidateSignUpForm />
            <br />
            <hr color="red" />
            <hr color="blue" />

            <h2>25. Label-Filters-Dashboard</h2>
            <LabelFiltersDashboard />
            <br />
            <hr color="red" />
            <hr color="blue" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);