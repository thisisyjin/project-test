import { useState } from 'react';
import styled from 'styled-components';

const InputTextBlock = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 10px;
`;

const StyledInput = styled.input`
  margin-top: 20px;
  width: 80%;
  border: none;
  padding: 12px 20px;
  &:focus {
    outline: none;
    background-color: #eeeccc;
  }
`;

const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  margin-left: 10px;
  padding: 12px 10px;
`;

const PositionFixed = styled.div`
  cursor: pointer;
  background-color: rgb(65, 105, 225);
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
        <StyledInput type="text" value={value} onChange={onChangeInput} />
        <StyledButton type="submit">Search</StyledButton>
      </form>
      <PositionFixed>카톡 문의하기</PositionFixed>
    </InputTextBlock>
  );
};

export default InputText;
