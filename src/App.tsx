import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.tsx';
import Login from './pages/login/index.tsx';
import Feed from './pages/feed/index.tsx';
import Cadastro from './pages/cadastro/index.tsx';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/feed' element={<Feed />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;
