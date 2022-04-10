import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import HomePage from './layout/HomePage';
import Explore from './components/Explore'
import Offers from './components/Offers'
import User from './components/users/User'
import SignUp from './components/users/SignUp'
import SignIn from './components/users/SignIn'
import Verification from './components/users/Verification';
import ErrorPage from './components/ErrorPage'

// car listings

import CarListing from './components/Cars/CarListing';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/explore' element={<Explore />} />
            <Route path='/offers'  element={<Offers />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/sign-in' element={<SignIn />}/>
            <Route path='/user/:username' element={<User />}/>
            <Route path={'/user/:username/verify-account'} element={<Verification />} />
            <Route path='/*' element={<ErrorPage />}/>
          </Routes>
          <CarListing />
      </Router>
      <ToastContainer />
      </div>
    </>
  );
}

export default App;
