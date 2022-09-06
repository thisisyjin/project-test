import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

  .logo {
    background-color: #fff;
    margin-left: 10px;
    font-size: 22px;
    font-weight: 700;
  }

  .desc {
    margin-left: 30px;
    color: #727272;
  }
`;

const Header = () => {
  return (
    <HeaderBlock className="header">
      <Link to="/" className="logo">
        AFZIMA
      </Link>
      <span className="desc">우리동네 병원 가격 등록</span>
    </HeaderBlock>
  );
};

export default Header;
