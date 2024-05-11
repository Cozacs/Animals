import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import Info from './Pages/Info/Info';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/Info' element={<Info />} />
    </Routes>
  </BrowserRouter>
);
