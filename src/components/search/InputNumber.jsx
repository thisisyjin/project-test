import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const InputNumberBlock = styled.div`
  display: flex;
  padding: 0 10px;

  form {
    position: relative;
    margin-top: 30px;
  }

  select,
  input {
    border: none;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
  }
  input {
    width: 90px;
  }

  select {
    margin-right: 14px;
    font-size: 16px;
  }

  option {
    font-size: 16px;
  }

  button {
    padding: 12px 10px;
    margin-left: 20px;
    background-color: #333;
    color: #fff;
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
    // 2. 네글자 제한 -> 두번째 인풋 4자되면 포커스 넘어가게 ㅇ
    // 3. state에 저장 ㅇ

    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;

    if (number[name].length === 4) {
      return;
    }

    if (regex.test(value)) {
      setNumber({ ...number, [name]: value });
    }
  };

  const showState = (e) => {
    e.preventDefault();
    if (!first) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    console.log(number);
    console.log(Object.values(number).join('-')); // 010-1234-5678
  };

  useEffect(() => {
    // 포커스 넘기기
    if (second.length === 4) {
      inputRef.current.focus();
    }
    // 유효성 검사
  }, [second.length]);

  return (
    <InputNumberBlock>
      <form onSubmit={showState}>
        <select
          name="tel"
          id="first-number"
          onChange={onChangeSelect}
          value={first}
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
        />
        <input
          name="third"
          type="number"
          pattern="[0-9]*"
          inputMode="decimal"
          onChange={handleNumber}
          value={third || ''}
          ref={inputRef}
        />
        <button>Show</button>
        {isError && <div className="error-msg">다시 입력하세요.</div>}
      </form>
    </InputNumberBlock>
  );
};

export default InputNumber;
