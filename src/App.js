import './App.css';
import Header from './components/Header'

import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import Contacts from './pages/Contact/Contacts'

function App() {
  return (
    <>
    
    <Header></Header>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='contact/*' element={<Contacts/>} >
        {/* <Route path=':contactOP' element={<Contact/>} /> */}
      </Route>

    </Routes>
    
    </>

  );
}

export default App;
