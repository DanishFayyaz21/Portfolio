import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Portfolio = lazy(() => import("../Page"));
const WebRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
      </Routes>
    </Suspense>
  );
};

export default WebRoutes;
