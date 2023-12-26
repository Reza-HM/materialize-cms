import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import routes from "./routes";
import Header from "./Components/Header";

const App: React.FC = () => {
  const router = useRoutes(routes as RouteObject[]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6]">
        <Header />
        {router}
      </div>
    </div>
  );
};

export default App;
