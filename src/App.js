import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// https://www.youtube.com/watch?v=Nl54MJDR2p8
// www.undraw.com for images
// React Website using Styled Components and Smooth Scroll - Beginner Project Fully Responsive| The website is fully responsive and we will be using React Hooks and React Router
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SigninPage} exact />
            </Switch>
        </Router>
    );
}

export default App;
