import Form from './components/Form';
import Signup from './components/Signup';
import Login from './components/Login'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div >
        <Navbar />

        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>


        <Routes>
          <Route path='/user/signup' element={<Signup />} />
        </Routes>


        <Routes>
          <Route path='/user/login' element={<Login />} />
        </Routes>

      </div>
    </BrowserRouter>
  );

}

export default App;
