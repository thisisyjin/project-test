import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Select from '../common/Select';
import Button from '../common/Button';

const InputNumberBlock = styled.div`
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
    margin-left: 14px;
    width: 90px;
    border-bottom: 2px solid #33333360;
    transition: all 0.3s;
    max-height: 50px;
  }

  .error-msg {
    margin-top: 15px;
    color: red;
    font-size: 14px;
  }

  .input-group {
    margin-left: 100px;
  }
`;

const InputNumber = () => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState({ first: '', second: '', third: '' });
  const [isError, setIsError] = useState(false);

  const { first, second, third } = number;

  // const onChangeSelect = (e) => {
  //   setNumber({ ...number, first: e.target.innerText });
  // };

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

  useEffect(() => {
    // 처음에 검사하기
    if (number.first && number.second && number.third) {
      // pass
    } else {
      setIsError(true);
    }
  }, [number]);

  return (
    <InputNumberBlock>
      <form>
        <Select
          desc="선택"
          options={['010', '011', '012', '031', '0132']}
          setNumber={setNumber}
          number={number}
        />
        <div className="input-group">
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
        </div>
        {isError && (
          <div className="error-msg">올바른 번호를 입력하여주세요.</div>
        )}
        <Button text="Submit" isError={isError} />
      </form>
    </InputNumberBlock>
  );
};

export default InputNumber;
