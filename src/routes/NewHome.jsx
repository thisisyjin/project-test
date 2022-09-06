import InputNumber from '../components/search/InputNumber';
import InputText from '../components/search/InputText';
import { Link } from '../../node_modules/react-router-dom/index';
import styled from 'styled-components';
import KakaoBanner from '../components/common/KakaoBanner';
import ShareButton from '../components/main/ShareButton';
import Header from '../components/common/Header';

const StyledLink = styled(Link)`
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  background-color: royalblue;
  color: #fff;
  display: block;
  padding: 20px;
  border-radius: 10px;
`;
const NewHome = () => {
  return (
    <>
      <Header />
      <InputText />
      <InputNumber />
      <StyledLink to="/progress">Test Page 2</StyledLink>
      <KakaoBanner />
      <ShareButton />
    </>
  );
};

export default NewHome;
