import InputNumber from '../components/search/InputNumber';
import InputText from '../components/search/InputText';
import { Link } from '../../node_modules/react-router-dom/index';
import styled from 'styled-components';
import KakaoBanner from '../components/common/KakaoBanner';
import ShareButton from '../components/main/ShareButton';
import Header from '../components/common/Header';
import InputGroup from '../components/search/InputGroup';

const StyledLink = styled(Link)`
  position: relative;
  top: 100px;
  display: block;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;
const StyledHr = styled.hr`
  margin-top: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const NewHome = () => {
  return (
    <>
      <Header />
      <InputGroup />
      <StyledHr />
      {/* <StyledLink to="/progress">Test Page 2</StyledLink> */}
      <StyledLink to="/test">Test Page 3</StyledLink>
      <KakaoBanner />
      <ShareButton />
    </>
  );
};

export default NewHome;
