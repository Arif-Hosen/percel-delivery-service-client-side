import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import About from './pages/About/About';
import AuthProvider from './Context/authProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import MyPercel from './pages/MyPercel/MyPercel';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute path='/services/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/myparcel'>
              <MyPercel></MyPercel>
            </PrivateRoute>
            <Route path='*'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
