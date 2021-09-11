import React from 'react';
import { Route,Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Student from '../Student/Student';
import Cam from '../Cam/Cam';
import Home from '../Home/Home';
import PageLink from '../PageLink/PageLink';

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {Home} exact={true}/>
      <Route path = "/admin" component = {Admin} exact={true}/>
      <Route path = "/student" component = {Student} exact={true}/>
      <Route path = "/cam" component = {Cam} exact={true}/>
    </div>
  );
}

export default App;
