import Header from '../components/common/Header';
import KakaoBanner from '../components/common/KakaoBanner';
import InputFile from '../components/main/InputFile';
import ShareButton from '../components/main/ShareButton';

const Home = () => {
  return (
    <>
      <Header />
      <InputFile />
      <ShareButton />
      <KakaoBanner />
    </>
  );
};

export default Home;
