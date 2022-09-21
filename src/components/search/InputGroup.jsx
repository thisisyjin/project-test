import { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import InputNumber from './InputNumber';
import InputText from './InputText';

const InputGroupBlock = styled.div``;

const InputGroup = () => {
  const [isTextError, setIsTextError] = useState(false);
  const [isNumError, setIsNumError] = useState(false);
  return (
    <InputGroupBlock>
      <InputText isTextError={isTextError} setIsTextError={setIsTextError} />
      <InputNumber isNumError={isNumError} setIsNumError={setIsNumError} />
      <Button text="Submit" isError={!(!isNumError && !isTextError)} />
    </InputGroupBlock>
  );
};

export default InputGroup;
