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
    border-bottom: 2px solid #33333360;
  }
`;

const StyledInput = styled.input`
  width: 60%;
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
  border-radius: 4px;
`;

const InputText = () => {
  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const checkValidName = (e) => {
    if (!value) {
    }
  };

  return (
    <InputTextBlock>
      <form className="input-form">
        <StyledInput
          type="text"
          value={value}
          onChange={onChangeInput}
          placeholder="이름"
          required
          onBlur={checkValidName}
        />
        <StyledButton type="submit">Search</StyledButton>
      </form>
    </InputTextBlock>
  );
};

export default InputText;
