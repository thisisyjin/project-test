import { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import InputNumber from './InputNumber';
import InputText from './InputText';
import PrivAgree from './PrivAgree';

const InputGroupBlock = styled.div``;

const InputGroup = () => {
  const [isTextError, setIsTextError] = useState(false);
  const [isNumError, setIsNumError] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  const onSubmitForm = () => {
    if (isTextError || isNumError || !isAgree) {
      console.log('2차 필터링');
      return;
    } else {
      console.log('ㅇㅋ 접수');
      // redux 요청 -> user.name / user.tel 저장하기 + 개인정보 동의
    }
  };
  return (
    <InputGroupBlock>
      <InputText isTextError={isTextError} setIsTextError={setIsTextError} />
      <InputNumber isNumError={isNumError} setIsNumError={setIsNumError} />
      <PrivAgree isAgree={isAgree} setIsAgree={setIsAgree} />
      <Button
        text="Submit"
        isError={!(!isNumError && !isTextError && isAgree)}
        onClickFun={onSubmitForm}
      />
    </InputGroupBlock>
  );
};

export default InputGroup;
