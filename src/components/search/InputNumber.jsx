import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import closed from '../../assets/icons/closed.svg';
import opened from '../../assets/icons/opened.svg';

const InputNumberBlock = styled.div`
  padding: 0 10px;

  .mb {
    margin-bottom: 80px;
  }

  // reset
  input:focus {
    outline: none;
  }

  form {
    position: relative;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
  }

  label {
    margin-left: 10px;
    margin-right: 14px;
    font-weight: 500;
  }

  select,
  input {
    border: none;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
    transition: all 0.25s ease-in;
    &:focus {
      outline: none;
      border-bottom: 2px solid royalblue;
    }
  }

  input {
    margin-left: 12px;
    width: 80px;
    border-bottom: 2px solid #33333360;
    transition: all 0.3s;
    max-height: 50px;
    background-color: #fff;
  }

  select {
    border-bottom: 2px solid #33333360;
    height: 44px;
    width: 75px;
    -webkit-appearance: none;
    background-image: url(${closed});
    background-position: 110%;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-right: 5px;
    background-color: #fff;
    color: #222;
    border-radius: 0;
    font-size: 16px;

    &:focus {
      background-image: url(${opened});
      background-position: 110%;
      background-repeat: no-repeat;
      background-size: 20px;
    }
  }

  .error-msg {
    position: absolute;
    bottom: 14px;
    left: 8px;
    z-index: -1;
    margin-top: 15px;
    color: red;
    font-size: 14px;
  }
`;

const InputNumber = ({ isNumError, setIsNumError }) => {
  const inputRef = useRef(null);
  const [number, setNumber] = useState({ first: '010', second: '', third: '' });

  const { first, second, third } = number;

  // const onChangeSelect = (e) => {
  //   setNumber({ ...number, first: e.target.innerText });
  // };

  const handleNumber = (e) => {
    // 1. 숫자만 입력되게 ㅇ
    // 2. 네글자 제한 -> 두번째 인풋 4자되면 포커스 넘어가게
    // 3. state에 저장 ㅇ

    const { name, value } = e.target;
    const regex = /^[0-9\b -]{0,13}$/; // 정규표현식
    const keyDown = e.nativeEvent.inputType;

    if (value === '.') return;

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

  const onChangeSelect = (e) => {
    setNumber({ ...number, first: e.target.value });
  };

  const showState = (e) => {
    e.preventDefault();
    if (!first || second.length !== 4 || third.length !== 4) {
      setIsNumError(true);
    } else {
      setIsNumError(false);
    }
    console.log(number);
    console.log(Object.values(number).join('-')); // 010-1234-5678
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (isNumError) {
      console.log('안대용');
    } else {
      console.log('제출댐');
    }
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
    // 처음에 검사하기 - 셋 다 입력되었는지? - 위에 useEffect랑 합칠순x?
    if (number.first && number.second && number.third) {
      // pass
    } else {
      setIsNumError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    if (number) {
      console.log(number.first, number.second, number.third);
    }
  }, [number]);
  return (
    <InputNumberBlock>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="tel">연락처</label>
        <div className="input-group">
          <select onChange={onChangeSelect}>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="011">016</option>
            <option value="011">017</option>
            <option value="011">018</option>
            <option value="0310">019</option>
          </select>
          <input
            name="second"
            type="number"
            id="tel"
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
        {isNumError && (
          <div className="error-msg">올바른 번호를 입력하여주세요.</div>
        )}
        <div className="mb"></div>
      </form>
    </InputNumberBlock>
  );
};

export default InputNumber;
