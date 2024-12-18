import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <div>
      <Outlet />
=======
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Outlet />
      <div></div>
>>>>>>> Stashed changes
    </div>
  );
};

export default App;
