import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Pages
import Home from './pages/Home';
import CourseList from './pages/courseList/CourseList';
import CourseDetail from './pages/courseDetail/CourseDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/courses" exact>
            <CourseList />
          </Route>
          <Route path="/detail/:id" exact>
            <CourseDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
