import styled from 'styled-components';
import { ReactComponent as Share } from '../../assets/icons/share.svg';

const ShareButtonBlock = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
`;

const StyledShare = styled.div`
  cursor: pointer;
  background-color: #333;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
`;

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '가격제보 서비스',
        text: 'unit test - share',
        url: 'https://github.com/',
      });
    } else {
      alert('share API를 지원하지 않는 환경');
    }
  };
  return (
    <ShareButtonBlock>
      <StyledShare
        onClick={() => {
          handleShare();
        }}
      >
        <Share />
      </StyledShare>
    </ShareButtonBlock>
  );
};

export default ShareButton;
