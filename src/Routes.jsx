import React from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { LandingPage, Terms, Tracking, About, SignIn, Safety } from "./pages";

const Routes = ({ location }) => {
  return (
    <DOMRoutes location={location}>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/terms' element={<Terms />} />
      <Route exact path='/tracking' element={<Tracking />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/signin' element={<SignIn />} />
      <Route exact path='/safety' element={<Safety />} />
    </DOMRoutes>
  );
};

export default Routes;
