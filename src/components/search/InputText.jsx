import { useEffect } from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const InputTextBlock = styled.div`
  padding: 0 10px;
  form {
    display: flex;
    height: 45px;
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
  display: block;
  position: relative;
  width: 60%;
  border: none;
  font-size: 16px;
  padding: 12px 24px;
  border-bottom: 2px solid #33333360;
  transition: all 0.25s ease-in;
  &:focus {
    outline: none;
    border-bottom: 2px solid royalblue;
  }
`;

const InputText = ({ isTextError, setIsTextError }) => {
  const nameRef = useRef(null);

  const [value, setValue] = useState('');

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const checkValidName = (e) => {
    if (value.length < 2) {
      setIsTextError(true);
    } else {
      setIsTextError(false);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

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
          ref={nameRef}
        />
        {isTextError && <span>2자 이상 입력하세요.</span>}
      </form>
    </InputTextBlock>
  );
};

export default InputText;
