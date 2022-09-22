import { useEffect } from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const InputTextBlock = styled.div`
  padding: 0 10px;
  form {
    position: relative;
    display: flex;
    height: 45px;
    align-items: center;
  }

  label {
    margin-left: 10px;
    margin-right: 15px;
    font-weight: 500;
  }

  span {
    position: absolute;
    top: 14px;
    right: 4px;
    color: red;
    font-size: 13px;
  }
`;

const StyledInput = styled.input`
  display: block;
  position: relative;
  width: 11rem;
  border: none;
  font-size: 16px;
  padding: 12px;
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
    // 글자수 제한만 걸어두기 - 리로드는 방지
  };

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);

  return (
    <InputTextBlock>
      <form className="input-form" onSubmit={onSubmitForm}>
        <label htmlFor="name">이름</label>
        <StyledInput
          id="name"
          type="text"
          minLength="2"
          value={value}
          onChange={onChangeInput}
          placeholder="이름을 입력해 주세요."
          required
          onBlur={checkValidName}
          ref={function (ref) {
            if (ref !== null) {
              ref.focus();
            }
          }}
        />
        {isTextError && <span>2자 이상 입력하세요.</span>}
      </form>
    </InputTextBlock>
  );
};

export default InputText;
