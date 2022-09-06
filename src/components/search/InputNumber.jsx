import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const InputNumberBlock = styled.div`
  display: flex;
  padding: 0 10px;

  // reset
  input:focus {
    outline: none;
    background-color: #eeeccc;
  }

  form {
    position: relative;
    margin-top: 30px;
  }

  select,
  input {
    border: none;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
  }
  input {
    width: 90px;
    border-bottom: 2px solid #33333360;
    transition: all 0.3s;
  }

  select {
    margin-right: 14px;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 2px solid #33333360;
    padding: 12px 10px;
  }

  option {
    font-size: 16px;
  }

  input + input {
    margin-left: 14px;
  }

  .error-msg {
    position: absolute;
    color: red;
    font-size: 14px;
  }
`;

const InputNumber = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState({ first: '', second: '', third: '' });
  const [isError, setIsError] = useState(false);

  const { first, second, third } = number;

  const onChangeSelect = (e) => {
    setNumber({ ...number, first: e.target.value });
  };

  const handleNumber = (e) => {
    // 1. 숫자만 입력되게 ㅇ
    // 2. 네글자 제한 -> 두번째 인풋 4자되면 포커스 넘어가게
    // 3. state에 저장 ㅇ

    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;
    const keyDown = e.nativeEvent.inputType;

    if (number[name].length === 4) {
      if (keyDown === 'deleteContentBackward') {
        setNumber({ ...number, [name]: value });
      }
      return;
    }

    if (regex.test(value)) {
      setNumber({ ...number, [name]: value });
    }
  };

  const showState = (e) => {
    e.preventDefault();
    if (!first || second.length !== 4 || third.length !== 4) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    console.log(number);
    console.log(Object.values(number).join('-')); // 010-1234-5678
  };

  useEffect(() => {
    console.log('검사');
    // 포커스 넘기기
    if (second.length === 4) {
      inputRef.current.focus();
    }
    // 유효성 검사
    if (third.length === 4) {
      inputRef.current.blur(); // focus 잃게
    }
  }, [second.length, third.length]);

  return (
    <InputNumberBlock>
      <form>
        <select
          name="tel"
          id="first-number"
          onChange={onChangeSelect}
          value={first}
          onBlur={showState}
        >
          <option value="">선택</option>
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="012">012</option>
          <option value="0130">0130</option>
        </select>

        <input
          name="second"
          type="number"
          pattern="[0-9]*"
          inputMode="decimal"
          onChange={handleNumber}
          value={second || ''}
          onBlur={showState}
        />
        <input
          name="third"
          type="number"
          pattern="[0-9]*"
          inputMode="decimal"
          onChange={handleNumber}
          value={third || ''}
          ref={inputRef}
          onBlur={showState}
        />
        {isError && (
          <div className="error-msg">올바른 번호를 입력하여주세요.</div>
        )}
      </form>
    </InputNumberBlock>
  );
};

export default InputNumber;
