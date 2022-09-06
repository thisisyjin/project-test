import styled from 'styled-components';
import { useState } from 'react';

const StyledSelect = styled.div`
  cursor: pointer;
  position: relative;
  width: 200px;
  padding: 8px;
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '⌵';
    position: absolute;
    top: 4px;
    right: 10px;
    font-size: 20px;
  }

  label {
    display: block;
    font-size: 14px;
    padding: 6px 8px;
    color: #333;
  }

  ul {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    top: 40px;
    left: 0;
    color: #333;
  }

  li {
    padding: 6px 8px;
    font-size: 14px;
    &:hover {
      background-color: #ccc;
    }
  }
`;

const Select = ({ options, desc = '값을 선택하세요' }) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState(desc);
  const [filterOptions, setFilterOptions] = useState(options);

  const onClickSelect = () => {
    setShowOption((prev) => !prev);
  };

  const selectOption = (e) => {
    const innerText = e.target.innerText;
    setSelectedValue(innerText);
    setFilterOptions(options.filter((op) => String(op) !== innerText)); // string 이므로
  };

  return (
    <StyledSelect onClick={onClickSelect}>
      <label>{selectedValue}</label>
      <ul show={showOption}>
        {showOption &&
          filterOptions.map((op, i) => (
            <li key={`op${i}`} onClick={selectOption}>
              {op}
            </li>
          ))}
      </ul>
    </StyledSelect>
  );
};

export default Select;
