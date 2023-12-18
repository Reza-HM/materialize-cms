import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import routes from "./routes";

const App = () => {
  const router = useRoutes(routes);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6]">{router}</div>
    </div>
  );
};
export default App;
