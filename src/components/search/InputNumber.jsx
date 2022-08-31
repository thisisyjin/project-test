import styled from 'styled-components';

const InputNum = styled.input`
  border: none;
  margin-right: 10px;
`;
const InputTel = styled.input`
  width: 80%;
`;

const InputNumber = () => {
  //   const limitLetter = function (el, max) {
  //     console.log(el, max);
  //     if (el.value.length > max) {
  //       el.value = el.value.substr(0, max);
  //     }
  //   };
  return (
    <>
      <form>
        <select name="tel" id="first-number">
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="012">012</option>
          <option value="0130">0130</option>
        </select>
        <label>
          text
          <InputNum type="text" />
        </label>
        <br />
        <label>
          number
          <InputNum type="number" />
        </label>

        <InputTel type="tel" />
      </form>
    </>
  );
};

export default InputNumber;
