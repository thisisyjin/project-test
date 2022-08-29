import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 1024px;
  padding: 2rem 0;
  margin: 0 auto;
  background-color: orange;

  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
