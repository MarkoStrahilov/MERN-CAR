import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './layout/HomePage';
import Explore from './components/Explore'
import Offers from './components/Offers'
import User from './components/User'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import ErrorPage from './components/ErrorPage'

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
            <Route path='/user/:id' element={<User />}/>
            <Route path='/*' element={<ErrorPage />}/>
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
