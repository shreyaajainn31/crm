import logo from './logo.svg';
import './App.css';

import './components/Navbar/Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Navbar/Pages/Home';
import PrintView from './components/Navbar/Pages/PrintView';
import ContactForm from './components/Navbar/Pages/ContactForm';
import AddContact from './components/Navbar/Pages/AddContact';
import ViewContact from './components/Navbar/Pages/ViewContact';

function App() {
  return (
    <div className="container-fluid">
        <Router>
          <Routes>
            <Route path = "/" element= {<Home/>}/>
            <Route path = "/contact" element = {<ViewContact/>}/>
            <Route path = "/addContact" element = {<AddContact/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
