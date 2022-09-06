import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
// import axios from 'axios';

const InputFileBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const UploadLabel = styled.label`
  border: none;
  cursor: pointer;
  margin-top: 120px;
  margin-bottom: 80px;

  .label-text {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 30px 42px;
    font-size: 20px;
    border-radius: 10px;
  }
`;

const StyledClose = styled(Close)`
  position: absolute;
  bottom: 14px;
  right: 9px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
`;

const PreviewBlock = styled.div`
  width: 344px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const PreviewWrap = styled.div`
  position: relative;
  margin-right: 8px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const PreviewImg = styled.img`
  position: relative;
  width: 80px;
  height: 80px;
`;

const InputFile = () => {
  const [fileImgs, setFileImgs] = useState([]);

  const onUploadImg = (e) => {
    const fileObjs = e.target.files;
    let imgUrlArr = [...fileImgs];

    for (let i = 0; i < fileObjs.length; i++) {
      const currentImgUrl = URL.createObjectURL(fileObjs[i]);
      imgUrlArr.push(currentImgUrl);
    }

    if (imgUrlArr.length > 10) {
      alert('10장 이하 첨부');
    }

    setFileImgs(imgUrlArr);
  };

  // 이미지 삭제
  const deleteImg = (id) => {
    setFileImgs(fileImgs.filter((v, i) => i !== id));
  };

  return (
    <InputFileBlock>
      <h1 className="input-title">ImageForm Test</h1>
      <UploadLabel
        htmlFor="img-uploader"
        className="add-button"
        onChange={onUploadImg}
      >
        <input
          style={{ display: 'none' }}
          type="file"
          required
          multiple
          accept="image/*"
          id="img-uploader"
          onChange={onUploadImg}
        />
        <span className="label-text">+ 사진 촬영 및 등록</span>
      </UploadLabel>
      <PreviewBlock>
        {fileImgs &&
          fileImgs.map((img, id) => (
            <PreviewWrap key={id}>
              <PreviewImg src={img} alt={`${img}-${id}`} />
              <StyledClose onClick={() => deleteImg(id)}>x</StyledClose>
            </PreviewWrap>
          ))}
      </PreviewBlock>
    </InputFileBlock>
  );
};

export default InputFile;
