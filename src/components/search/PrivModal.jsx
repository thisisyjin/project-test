import styled from 'styled-components';

const FullScreen = styled.div`
  z-index: 100;
  background-color: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
`;

const PrivModalBlock = styled.div`
  position: absolute;
  width: 80%;
  height: 65%;
  border-radius: 8px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .header {
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.02em;
    width: 100%;
    background-color: royalblue;
    color: #fff;
    padding: 15px;
    text-align: center;
    border-radius: 8px 8px 0 0;
    margin-top: -1px; // detail
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }

  .main-info {
    font-size: 15px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 34px;
    letter-spacing: -0.01em;
  }

  .sub-info {
    font-size: 14px;
    color: #444;
    margin: 0 auto;
    margin-bottom: 16px;
  }

  .line {
    width: 60%;
    height: 1px;
    background-color: #00000060;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  button {
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 14px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
  }
`;

const PrivModal = ({ onCloseModal, isVisible }) => {
  return (
    <FullScreen>
      <PrivModalBlock>
        <div className="header">개인정보 수집/이용 안내</div>
        <div className="content">
          <div className="main-info">
            자사는 참여자(이용자)의 소중한 개인정보를 보호하기 위하여
            ‘개인정보보호법’ 등 개인정보에 관한 제반 법령을 준수하고 있습니다.
            ‘개인정보취급방침’을 제정하여, 참여자가 제공하는 개인정보가 어떠한
            용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가
            취해지고 있는지 알려 드립니다.
          </div>
          <div className="line"></div>
          <div className="sub-info">
            1. 개인정보 수집자 : ㈜아프지마 <br />
            2. 개인정보 수집 항목 : 성명, 휴대전화번호 <br />
            3. 개인정보 수집 이용 목적 : 모바일 쿠폰 송부 <br />
            4. 개인정보 보유 기간 : 이벤트 종료 후 1년간 보유 후 파기
          </div>
        </div>
        <button onClick={onCloseModal}>닫기</button>
      </PrivModalBlock>
    </FullScreen>
  );
};

export default PrivModal;
