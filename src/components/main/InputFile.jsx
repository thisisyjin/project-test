import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
// import axios from 'axios';

const InputFileBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const UploadLabel = styled.label`
  width: 100%;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 40px;

  .label-text {
    display: block;
    text-align: center;
    background-color: #fff;
    border: 2px solid #333;
    color: #333;
    width: 90%;
    margin: 0 auto;
    padding: 26px 50px;
    font-size: 20px;
    border-radius: 12px;
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

const StyledUploadButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: royalblue;
  color: #fff;
  font-size: 20px;
  width: 95%;
  margin: 0 auto;
  padding: 25px;
  margin-top: 40px;

  &:disabled {
    background-color: #eee;
    color: #bbb;
  }
`;

const InputFile = () => {
  const [fileImgs, setFileImgs] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null);

  const onUploadImg = (e) => {
    console.log('하이');
    const fileObjs = e.target.files;
    let imgUrlArr = [...fileImgs];

    for (let i = 0; i < fileObjs.length; i++) {
      const currentImgUrl = URL.createObjectURL(fileObjs[i]);
      imgUrlArr.push(currentImgUrl);
    }

    if (imgUrlArr.length > 10) {
      alert('10장 이하 첨부하세요');
      return; // undefined or null
    }

    setFileImgs(imgUrlArr);
    setSelectedFiles(fileObjs);
  };

  // 이미지 삭제
  const deleteImg = (id) => {
    setFileImgs(fileImgs.filter((v, i) => i !== id));
    setSelectedFiles([...selectedFiles].filter((v, i) => i !== id));
    // ❓ 배열 형태로 filter 해도 되는건지 ?
  };

  // 업로드시
  const onClickButton = (e) => {
    const formData = new FormData();
    formData.append('upload', selectedFiles);
    console.log(selectedFiles);

    // axios.post 요청
  };

  return (
    <InputFileBlock>
      <h1 className="input-title">ImageForm Test</h1>
      <UploadLabel htmlFor="img-uploader" className="add-button">
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
      <StyledUploadButton disabled={!fileImgs.length} onClick={onClickButton}>
        업로드
      </StyledUploadButton>
    </InputFileBlock>
  );
};

export default InputFile;
