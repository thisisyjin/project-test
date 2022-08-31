import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Progress from './routes/Progress';

function App() {
  return (
    <BrowserRouter basename="/project-test/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress/:step" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
