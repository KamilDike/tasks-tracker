import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AddTask from './components/Task/AddTask';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" component={ProjectBoard} />      
          <Route exact path="/addTask" component={AddTask} />      
        </div>
      </Router>
    </Provider>
  );
}

export default App;
