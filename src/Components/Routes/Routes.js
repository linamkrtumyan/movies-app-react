import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../../Pages/Home";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default RoutesComponent;
