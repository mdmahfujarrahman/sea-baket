import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import Footer from './components/Sheard/Footer';

function App() {
  return (
      <div>
          <Home />
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
          <Footer />
      </div>
  );
}

export default App;
