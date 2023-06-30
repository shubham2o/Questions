// https://codedamn.com/problem/18ZKuSTsrNH7-0xIhVPyM

import { useState } from 'react';
import styled from 'styled-components';

const SelectAllCheckboxes = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: false },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: false },
    ])

    const handleCheckboxChange = (id) => {
        setCheckboxes(
            checkboxes.map((checkbox) =>
                checkbox.id === id
                    ? { ...checkbox, checked: !checkbox.checked }
                    : checkbox
            )
        )
    }

    const handleSelectAll = () => {
        setCheckboxes(
            checkboxes.map((checkbox) => ({ ...checkbox, checked: true }))
        )
    }

    return (
        <Container>
            <CheckboxContainer>
                {checkboxes.map((checkbox, index) => (
                    <CheckboxLabel key={checkbox.id}>
                        <input
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        {checkbox.label}
                    </CheckboxLabel>
                ))}
            </CheckboxContainer>

            <SelectAllButton
                onClick={handleSelectAll}
            >Select All
            </SelectAllButton>
        </Container>
    )
}

export default SelectAllCheckboxes;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	margin: 24px;
`;

const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const SelectAllButton = styled.button`
	padding: 10px 20px;
	font-size: 18px;
	border: none;
	border-radius: 4px;
	background-color: #333;
	color: #fff;
	cursor: pointer;
	margin-top: 24px;
	&:hover {
		opacity: 0.8;
	}
`;