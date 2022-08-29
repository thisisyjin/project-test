import styled from 'styled-components';

const InputRefBlock = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border-radius: 100px;
  text-align: center;
  line-height: 100px;
`;

const InputFile = () => {
  return (
    <>
      <label htmlFor="input-img">
        <InputRefBlock>업로드</InputRefBlock>
      </label>
      <input required multiple type="file" accept="image/*" id="input-img" />
    </>
  );
};

export default InputFile;
