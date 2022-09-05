import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import NewHome from './routes/NewHome';
import Progress from './routes/Progress';

function App() {
  return (
    <>
      <Helmet>
        <title>[가격제보서비스] Unit Test</title>
        <link rel="icon" href="./assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="./assets/icons/favicon.ico" />
      </Helmet>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </>
  );
}

export default App;
