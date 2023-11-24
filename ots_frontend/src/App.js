import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import React , {createContext , useCallback, useContext , useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import homePage from './components/homePage/HomePage';
import Login from './components/forms/login';
import Student_Register from './components/forms/student_register';
import Faculty_Register from './components/forms/faculty_register';
import Footer from './components/footer/footer';
import Courses from './components/courses/courses';
import About from './components/about/about';
import Carrier from './components/carrier/carrier';
import Contact from './components/contact/contact';
import Privacy_policy from './components/footer/privacy_policy';
import Carrier_Details from './components/carrier/details';
import IMG_Gen from './components/service/AI tools/img_gen';
import Service from './components/service/service';
// import LobbyScreen from './components/service/zoom/lobby';
// import RoomPage from './components/service/zoom/room';
import Profile from './components/profile/profile';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

function App() {

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/home" component={homePage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signUp' component={Student_Register}/>
            <Route exact path='/apply' component={Faculty_Register}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/carrier' component={Carrier}/>
            <Route exact path='/carrier/:id' component={Carrier_Details} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/courses' component={Courses}/>
            <Route exact path='/Image-Generation' component={IMG_Gen}/>
            <Route exact path='/privacy-policy' component={Privacy_policy}/>
            <Route exact path='/services' component={Service}/>
            {/* <Route exact path='/live-class' component={LobbyScreen} />
            <Route exact path='/room/:rooiId' component={RoomPage} /> */}
            <Route exact path='/profile' component={Profile} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
