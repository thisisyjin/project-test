import { useRef, useState } from 'react';
import styled from 'styled-components';

const InputNumberBlock = styled.div`
  display: flex;
  padding: 0 10px;

  form {
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
    margin-right: 20px;
    font-size: 16px;
  }
  option {
    font-size: 16px;
  }

  input + input {
    margin-left: 20px;
  }
`;

const InputNumber = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState({ first: '', second: '', third: '' });

  const { first, second, third } = number;

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    setNumber({ ...number, first: e.target.value });
  };

  const handleNumber = (e) => {
    // 1. 숫자만 입력되게
    // 2. 네글자 제한 -> 두번째 인풋 4자되면 포커스넘어가게
    // 3. state에 저장

    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/;

    if (regex.test(value)) {
      setNumber({ ...number, [name]: value });
    }
  };

  const showState = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <InputNumberBlock>
      <form>
        <select
          name="tel"
          id="first-number"
          onChange={onChangeSelect}
          value={first}
        >
          <option value="--">선택</option>
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

        <button onClick={showState}>show state</button>
      </form>
    </InputNumberBlock>
  );
};

export default InputNumber;
