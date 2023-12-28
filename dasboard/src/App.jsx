import React, { useState, useEffect } from "react";
import PublicRoute from "./router/Routers/publicRouter";
import Routes from "./router/Routes";
import { GetRoutes } from "./router/Routers";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...PublicRoute]);

  useEffect(() => {
  const routes = GetRoutes();
    setAllRoutes((allRoutes)=>[routes,...allRoutes]);
}, []);

  return <Routes allRoutes={allRoutes} />;
};

export default App;
