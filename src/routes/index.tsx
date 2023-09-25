import React from "react";
import { Routes as RouterRoutes, Route, BrowserRouter } from "react-router-dom";
import { Car, Update } from "views";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route index element={<Car />} />
        <Route element={<Update />} path="/update-car" />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
