import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './css/app.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage}
      />
    </Router>
  );
}

export default App;
