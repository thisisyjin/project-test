import styled from 'styled-components';

const StyledBtn = styled.button`
  cursor: pointer;
  display: block;
  width: 300px;
  background-color: royalblue;
  color: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  margin: 0 auto;

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
