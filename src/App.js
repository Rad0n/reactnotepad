import React from 'react';
import MainPage from './components/MainPage'
import './App'
import AddPage from './components/AddPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MainPage} />

        <Route path="/add" component={AddPage} />
     </div>

    </Router>
    
  );
}

export default App;
