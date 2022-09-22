import { useEffect } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/index';

import Header from '../components/common/Header';
import InputFileTest from '../components/main/InputFileTest';

const Home = () => {
  const navigate = useNavigate();

  const handleEvent = () => {
    window.history.pushState(null, null, window.location.href);
    const response = window.confirm('정말 뒤로 가시겠습니까?');
    if (response) {
      navigate('/');
    }
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', handleEvent);
    return () => {
      window.removeEventListener('popstate', handleEvent);
    };
  }, []);

  return (
    <>
      <Header />
      <InputFileTest />
    </>
  );
};

export default Home;
