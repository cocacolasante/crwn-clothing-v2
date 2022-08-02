import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navigation/Navbar.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/shop/Shop.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Navbar />} >
        <Route index element={ <Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
     
    </Routes>
  );
};

export default App;
