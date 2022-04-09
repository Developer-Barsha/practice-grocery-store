import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Cart/RequireAuth/RequireAuth';
import Header from './components/Header/Header';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Store from './components/Store/Store';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Welcome></Welcome>}></Route>
          <Route path="/home" element={<Welcome></Welcome>}></Route>
          {/* <Route path="/store" element={<Store></Store>}></Route> */}
          <Route path="/store" element={
            <RequireAuth>
              <Store/>
            </RequireAuth>
          }></Route>
          <Route path='/item/:idMeal' element={<ItemDetail/>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
  );
}

export default App;
