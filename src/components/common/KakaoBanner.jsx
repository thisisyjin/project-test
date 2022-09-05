import styled from 'styled-components';

const KakaoBannerBlock = styled.a`
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px 55px;
  background-color: royalblue;
  color: #fff;
  border-radius: 100px;
  text-align: center;
  font-size: 20px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.15);
`;

const KakaoBanner = () => {
  return (
    <KakaoBannerBlock href="http://pf.kakao.com/_xkSxkxdxj" target="_blank">
      <span>카톡 문의하기</span>
    </KakaoBannerBlock>
  );
};

export default KakaoBanner;
