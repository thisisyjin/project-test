import styled from 'styled-components';
import InputFile from './InputFile';

const ImagePreview = styled.img``;

const ImageUpload = () => {
  return (
    <>
      <InputFile />
      <ImagePreview />
    </>
  );
};

export default ImageUpload;
