
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/product' element={<Product/>}/>
        
      </Routes>
      </ BrowserRouter>
    
    </div>
  );
}

export default App;
