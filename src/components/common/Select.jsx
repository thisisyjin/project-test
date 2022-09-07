import styled from 'styled-components';
import { useState } from 'react';

const StyledSelect = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100px;
  padding: 8px 3px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;

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
    padding-left: 10px;
  }

  ul {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    top: 40px;
    left: 0;
    color: #333;
  }

  li {
    padding: 6px 8px;
    font-size: 14px;
    padding-left: 10px;
    &:hover {
      background-color: #ccc;
    }
  }
`;

const Select = ({ options, desc = '값을 선택하세요', setNumber, number }) => {
  const [showOption, setShowOption] = useState(false);
  const [selectedValue, setSelectedValue] = useState(desc);
  const [filterOptions, setFilterOptions] = useState(options);

  const onClickSelect = () => {
    setShowOption((prev) => !prev);
  };

  const selectOption = (e) => {
    const innerText = e.target.innerText;
    setSelectedValue(innerText); // 1. 렌더링용
    setFilterOptions(options.filter((op) => String(op) !== innerText)); // string 이므로
    setNumber({ ...number, first: innerText }); // 2. 데이터 부모로 보내는 용
  };

  return (
    <StyledSelect onClick={onClickSelect} onBlur={onClickSelect}>
      <label>{selectedValue}</label>
      <ul>
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
