import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import AboutPage from './pages/aboutpage';
import Homepage from './pages/homepage';
import Profile from './pages/profile';

let  App = () => {

  return(
    <BrowserRouter>

      <h1>TEst</h1>

      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/aboutus'} component={AboutPage} />
        <Route path={'/profile/:profileId'} component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
