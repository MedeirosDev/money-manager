  
import React from 'react';
import { BrowserRouter, Route, Redirect  } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PasswordRecovery from './pages/Auth/PasswordRecovery';
import PasswordRecoveryChange from './pages/Auth/PasswordRecoveryChange';


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ Home } path="/" exact />
      <Route component={ Login } path="/login" exact />
      <Route component={ Register } path="/register" exact />
      <Route component={ PasswordRecovery } path="/password-recovery" exact />
      <Route component={ PasswordRecoveryChange } path="/password-recovery-change" />
      {/* <Route component={CreatePoint} path="/create-point" /> */}
    </BrowserRouter>
  );
};

export default Routes;