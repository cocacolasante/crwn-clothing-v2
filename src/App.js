import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navigation/Navbar.component';
import SignIn from './routes/sign-in/sign_in.component';

const Shop = () => {
  return <h1> I am the Shop Page</h1>
}


const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navbar />} >
        <Route index element={ <Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
     
    </Routes>
  );
};

export default App;
