import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import NewHome from './routes/NewHome';
import Progress from './routes/Progress';

function App() {
  return (
    <>
      <Helmet>
        <title>[가격제보서비스] Unit Test</title>
        <link rel="icon" href="./assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="./assets/icons/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="가격제보시스템" />
        <meta property="og:title" content="아프지마 - 가격제보시스템" />
        <meta
          property="og:description"
          content="아프지마 프론트엔드 테스트중입니다. 아프지마 최고. 가격제보시스템 프로젝트 화이팅."
        />
        <meta property="og:image" content="./logoex.png" />
        <meta
          property="og:url"
          content="https://thisisyjin.github.io/project-test/"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/test" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
