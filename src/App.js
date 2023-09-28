import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Signin from './components/Signin';
import NewSubmit from './components/NewSubmit';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
  return (

    <BrowserRouter basename='/testlog'>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/otp' element={<NewSubmit />}></Route>
        <Route path='/forgotPassord' element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
