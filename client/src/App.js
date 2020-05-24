import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//Components
import AddOrder from './components/addorder';

function App() {
  return (
    <Router>
      <div>
        <h1>Footwear Ordering System</h1>
        <Route exact path="/addorder" component={AddOrder} />
      </div>
    </Router>
  );
}

export default App;