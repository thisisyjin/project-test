import styled from 'styled-components';

const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000090;
  display: flex;
  align-items: center;
`;

const BlockPrevModalBlock = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  padding: 24px 14px;
  margin: 0 auto;

  .content {
    margin-bottom: 22px;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.6;
  }

  .btns {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  button {
    display: block;
    padding: 14px 42px;
    background-color: #eee;
    color: #666;
    border-radius: 6px;
    font-size: 16px;
  }

  button.yes {
    background-color: royalblue;
    color: #fff;
  }
`;

const BlockPrevModal = ({ onCloseModal, onMovePrevPage }) => {
  return (
    <FullScreen>
      <BlockPrevModalBlock>
        <div className="content">
          뒤로가시면 다시 입력하셔야 합니다. <br />
          정말 뒤로가시겠습니까?
        </div>
        <div className="btns">
          <button onClick={onCloseModal}>취소</button>
          <button className="yes" onClick={onMovePrevPage}>
            확인
          </button>
        </div>
      </BlockPrevModalBlock>
    </FullScreen>
  );
};

export default BlockPrevModal;
