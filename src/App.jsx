import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Projects } from './pages/Projetos';
import { Contato } from './pages/Contato'
import { Curriculo } from './pages/Curriculo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/projetos' element={<Projects />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/curriculo' element={<Curriculo />}/>
      </Routes>
    </Router>
  )
}

export default App;