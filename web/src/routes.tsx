import {BrowserRouter,Route} from 'react-router-dom'
import React from 'react';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoints';

const Routes = () => {
  return(
    <BrowserRouter>
        <Route exact path = "/" component = {Home} />
        <Route path = '/create-point' component = {CreatePoint} />
    </BrowserRouter>
  )
}

export default Routes;