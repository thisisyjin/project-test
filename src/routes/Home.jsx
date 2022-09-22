import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/index';
import BlockPrevModal from '../components/common/BlockPrevModal';

import Header from '../components/common/Header';
import InputFileTest from '../components/main/InputFileTest';

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleEvent = () => {
    window.history.pushState(null, null, window.location.href);
    setVisible(true); // 모달 띄우기
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', handleEvent);
    return () => {
      window.removeEventListener('popstate', handleEvent);
    };
  }, []);

  const onCloseModal = () => {
    setVisible(false);
  };

  const onMovePrevPage = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <InputFileTest />
      {visible && (
        <BlockPrevModal
          onCloseModal={onCloseModal}
          onMovePrevPage={onMovePrevPage}
        />
      )}
    </>
  );
};

export default Home;
