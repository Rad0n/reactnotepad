import React from 'react';
import MainPage from './components/MainPage'
import './App'
import Add from './components/Add'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MainPage} />

        <Route path="/add" component={Add} />
     </div>

    </Router>
    
  );
}

export default App;
