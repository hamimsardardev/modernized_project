import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/pages/Home";
import SuccessPart from "./components/pages/SuccessPart";
import AppDevelop from "./components/pages/AppDevelop";
import Webdevelop from "./components/pages/Webdevelop";
import SocialMedia from "./components/pages/SocialMedia";
import ContractPart from "./components/pages/ContractPart";
import GovermentPart from "./components/pages/GovermentPart";
import RootLayout from "./components/RootLayout";





const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/SuccessPart", Component: SuccessPart },
      { path: "/AppDevelop", Component: AppDevelop },
      { path: "/Webdevelop", Component: Webdevelop },
      { path: "/SocialMedia", Component: SocialMedia },      
      { path: "/ContactPart", Component: ContractPart },
      { path: "/Govermentpart", Component: GovermentPart},      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
