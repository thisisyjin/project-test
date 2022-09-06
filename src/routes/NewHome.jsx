import InputNumber from '../components/search/InputNumber';
import InputText from '../components/search/InputText';
import { Link } from '../../node_modules/react-router-dom/index';
import styled from 'styled-components';
import KakaoBanner from '../components/common/KakaoBanner';
import ShareButton from '../components/main/ShareButton';
import Header from '../components/common/Header';

const StyledLink = styled(Link)`
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-left: 40px;
  position: relative;
  top: 100px;
`;

const NewHome = () => {
  return (
    <>
      <Header />
      <InputText />
      <InputNumber />
      <StyledLink to="/progress">Test Page 2</StyledLink>
      <StyledLink to="/test">Test Page 3</StyledLink>
      <KakaoBanner />
      <ShareButton />
    </>
  );
};

export default NewHome;
