import styled from 'styled-components';

const StyledBtn = styled.button`
  cursor: pointer;
  margin-top: 100px;
  display: block;
  width: 355px;
  background-color: #333;
  color: #fff;
  padding: 20px 30px;
  border-radius: 8px;

  &:disabled {
    cursor: default;
    background-color: #aaaaaa50;
    color: #333;
  }
`;

const Button = ({ text, isError }) => {
  return (
    <StyledBtn type="submit" disabled={isError}>
      {text}
    </StyledBtn>
  );
};

export default Button;
