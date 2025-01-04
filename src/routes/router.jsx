import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import HomeDesign from "../Components/ProjectDetails/HomeDesign";
import Pets from "../Components/ProjectDetails/Pets";
import Bookish from "../Components/ProjectDetails/Bookish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },
  {
    path: "/home-design",
    element: <HomeDesign></HomeDesign>,
  },
  {
    path: "/pets",
    element: <Pets></Pets>
  },
  {
    path: "/gadgets",
    element: <Bookish></Bookish>,
  },
]);

export default router;
