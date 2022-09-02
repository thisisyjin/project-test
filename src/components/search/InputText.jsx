import { useState } from 'react';
import styled from 'styled-components';

const InputTextBlock = styled.div`
  padding: 0 10px;
  form {
    display: flex;
    height: 45px;
  }

  input {
    font-size: 16px;
  }
`;

const StyledInput = styled.input`
  width: 80%;
  border: none;
  padding: 12px 24px;
  &:focus {
    outline: none;
    background-color: #eeeccc;
  }
`;

const StyledButton = styled.button`
  background-color: #333;
  display: block;
  color: #fff;
  margin-left: 10px;
  padding: 12px 10px;
  height: 45px;
`;

const PositionFixed = styled.div`
  cursor: pointer;
  background-color: #4169e1;
  color: #fff;
  font-weight: 700;
  width: 200px;
  height: 65px;
  border-radius: 200px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputText = () => {
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputTextBlock>
      <form className="input-form">
        <StyledInput
          type="text"
          value={value}
          onChange={onChangeInput}
          placeholder="이름"
        />
        <StyledButton type="submit">Search</StyledButton>
      </form>
      <PositionFixed>카톡 문의하기</PositionFixed>
    </InputTextBlock>
  );
};

export default InputText;
