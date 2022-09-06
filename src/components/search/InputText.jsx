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

  span {
    position: relative;
    top: 22px;
    left: 20px;
    color: red;
    font-size: 14px;
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

const InputText = () => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const checkValidName = (e) => {
    if (value.length < 2) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <InputTextBlock>
      <form className="input-form" onSubmit={onSubmitForm}>
        <StyledInput
          type="text"
          minLength="2"
          value={value}
          onChange={onChangeInput}
          placeholder="이름"
          required
          onBlur={checkValidName}
        />
        {isError && <span>다시 확인해주세요.</span>}
      </form>
    </InputTextBlock>
  );
};

export default InputText;
