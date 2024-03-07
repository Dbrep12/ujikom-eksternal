import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Create from './components/Create'
import Update from './components/Update';
import Login from './components/login/Log-in';
import Db from './api/db.json'
import Register from './components/login/Register';
import UserNavbar from './components/user/UserNavbar';
import Fetch from './components/user/Fetch';
import UserMain from './components/user/UserMain'
import UserContact from './components/user/UserContact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* admin page */}
      
          <Route path="/home" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/login' element={<Login handleAccounts={Db.user}  />} />
          <Route path='/' element={<Register />} />

          {/* user page */}

          <Route path="/usernav" element={<UserNavbar />} />
          <Route path="/user" element={<UserMain />} />
          <Route path="/usercontact" element={<UserContact />} />
          <Route path="/usermenu" element={<Fetch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;