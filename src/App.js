import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewHome from './routes/NewHome';
import Progress from './routes/Progress';

function App() {
  return (
    <BrowserRouter basename="/project-test/">
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
