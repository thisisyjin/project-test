import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
// import axios from 'axios';

const InputFileTestBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  .img-header {
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const UploadLabel = styled.label`
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;

  .label-text {
    display: block;
    text-align: center;
    background-color: #fff;
    border: 2px solid #333;
    color: #333;
    width: 100%;
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
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const PreviewWrap = styled.div`
  position: relative;
  margin-right: 10px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const PreviewImg = styled.img`
  position: relative;
  width: 75px;
  height: 75px;
`;

const StyledUploadButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: royalblue;
  color: #fff;
  font-size: 20px;
  width: 95%;
  margin: 0 auto;
  padding: 25px 0;
  margin-top: 20px;

  &:disabled {
    background-color: #eee;
    color: #bbb;
  }
`;

const InputFileTest = () => {
  const formData = new FormData();
  const [fileImgs, setFileImgs] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onUploadImg = (e) => {
    const fileObjs = e.target.files;
    let imgUrlArr = [...fileImgs];

    const recentFiles = [...selectedFiles];

    if (recentFiles.length + fileObjs.length > 10) {
      alert('열장 넘었어용 !');
      return;
    }

    // 미리보기 이미지 url 등록
    for (let i = 0; i < fileObjs.length; i++) {
      const currentImgUrl = URL.createObjectURL(fileObjs[i]);
      imgUrlArr.push(currentImgUrl);
    }

    setSelectedFiles([...selectedFiles, ...fileObjs]);
    setFileImgs(imgUrlArr);

    // formData append 하기
    for (let i = 0; i < fileObjs.length; i++) {
      formData.append('img', fileObjs[i]);
    }
    for (const key of formData) console.log(key); // formData 객체 내부 조회
  };

  // 이미지 삭제
  const deleteImg = (id) => {
    setFileImgs(fileImgs.filter((v, i) => i !== id));
    setSelectedFiles([...selectedFiles].filter((v, i) => i !== id));
  };

  // 업로드시
  const onClickButton = (e) => {
    console.log(selectedFiles);
    console.log(selectedFiles.length); // Redux -> image.uploadPicCnt
    // axios.post 요청

    // Array -> FileList 변환
    const dataTransfer = new DataTransfer();
    selectedFiles.forEach((selectedFile) => {
      dataTransfer.items.add(selectedFile);
    });
    console.log(dataTransfer.files); // FileList 객체
    // Redux -> image.imgId
  };

  return (
    <InputFileTestBlock>
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

      <div className="img-header">
        <h3>사진 등록</h3>
        {selectedFiles ? `${selectedFiles.length}/10장` : '0/10장'}
      </div>

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
    </InputFileTestBlock>
  );
};

export default InputFileTest;
