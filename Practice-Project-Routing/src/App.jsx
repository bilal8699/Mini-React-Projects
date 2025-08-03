import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Course from "./Pages/Course";
import { RouterProvider } from "react-router-dom";

const allrouts = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/about-us',
    element: <About/>
  },
  {
    path:'/course',
    element: <Course/>
  }
])

function App() {
  return(
    <RouterProvider router={allrouts} />
  );
}

export default App;
