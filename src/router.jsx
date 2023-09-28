import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LearnLayout from "./pages/LearnLayout";
import CreateMasterBahan from "./pages/master-bahan/CreateMasterBahan";
import HomeMasterBahan from "./pages/master-bahan/HomeMasterBahan";

const routes = [
  { path: "/", element: <Dashboard title="Dashboard Activity" /> },
  { path: "/home", element: <Home title="Dashboard Activity" /> },
  { path: "/layout", element: <LearnLayout /> },
  { path: "/master-bahan", element: <HomeMasterBahan /> },
  {
    path: "/master-bahan/create",
    element: <CreateMasterBahan />,
  },
];

export default routes;
