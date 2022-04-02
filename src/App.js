import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Store from './components/Store/Store';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/home" element={<Welcome></Welcome>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
