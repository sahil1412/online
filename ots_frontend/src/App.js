import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import homePage from './components/homePage/homePage';
import Login from './components/forms/login';
import Student_Register from './components/forms/student_register';
import Faculty_Register from './components/forms/faculty_register';
import Footer from './components/footer/footer';
import Courses from './components/courses/courses';
import About from './components/about/about';
import Carrier from './components/carrier/carrier';
import Contact from './components/contact/contact';
import Privacy_policy from './components/footer/privacy_policy';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
            <Route exact path="/" component={homePage}/>
            <Route exact path="/home" component={homePage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/s_sign-up' component={Student_Register}/>
            <Route exact path='/f_sign-up' component={Faculty_Register}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/carrier' component={Carrier}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/courses' component={Courses}/>
            <Route exact path='/privacy-policy' component={Privacy_policy}/>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
