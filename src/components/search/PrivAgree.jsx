import { useState } from 'react';
import styled from 'styled-components';
import PrivModal from './PrivModal';
import check from '../../assets/icons/check.svg';
import checked from '../../assets/icons/checkFill.svg';

const PrivAgreeBlock = styled.div`
  display: flex;
  padding: 0 20px;
  margin-bottom: 16px;
  align-items: center;

  input {
    display: none;
  }

  label {
    margin-right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    background-image: url(${check});
    background-size: contain;
  }

  input:checked + label {
    border: none;
    background-image: url(${checked});
    background-size: contain;
  }

  div {
    color: #333;
    margin-right: 20px;
  }

  .detail-show {
    font-size: 14px;
    color: #777;
  }
`;

const PrivAgree = ({ isAgree, setIsAgree }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onOpenModal = () => {
    setIsVisible(true);
  };

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const onCheckBox = (e) => {
    setIsAgree(e.target.checked);
  };

  return (
    <PrivAgreeBlock>
      <input type="checkbox" id="agree" onChange={onCheckBox} />
      <label htmlFor="agree"></label>
      <div>(필수) 개인정보 수집/이용 동의</div>
      <span onClick={onOpenModal} className="detail-show">
        상세보기
      </span>
      {isVisible && (
        <PrivModal onCloseModal={onCloseModal} isVisible={isVisible} />
      )}
    </PrivAgreeBlock>
  );
};

export default PrivAgree;
