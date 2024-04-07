
// import React, { Component } from "react";
import Home from "./component/Home/Home";
// import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import NotFound from "./component/NotFound/NotFound";
import Cheek from "./component/Cheek/Cheek";
import Login from "./component/Login/Login";
import Symptoms from "./component/Symptoms/Symptoms.jsx";
import DashBord from "./component/DashBord/DashBord.jsx"
import Contact from "./component/Contact/Contact";
import Signup from "./component/Signup/Signup";
// import MainLogin from "./component/Layout/MainLogin";
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import Treatment from "./component/Treatment/Treatment.jsx";
import FAQs from "./component/FAQs/FAQs.jsx";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/BreastCancer",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "Login", element: <Login /> },
        { path: "Signup", element: <Signup /> },
        { path: "Cheek", element: <Cheek /> },
        { path: "Symptoms", element: <Symptoms /> },
        { path: "Footer", element: <Footer /> },
        { path: "DashBord", element: <DashBord /> },
        { path: "Treatment", element: <Treatment /> },
        { path: "FAQs", element: <FAQs /> },
        { path: "Contact", element: <Contact /> },
        { path: "ForgetPass", element: <ForgetPassword /> },
      ],
    },
  ]);

        return (
          <>
            <div>
              <RouterProvider
                router={(routers)}
              />
            </div>
          </>
        );
      }
  
  //  import React, { Component } from "react";
  // import Home from "./component/Home/Home";
  // // import Navbar from "./component/Navbar/Navbar.jsx";
  // import Footer from "./component/Footer/Footer";
  // import { RouterProvider, createBrowserRouter } from "react-router-dom";
  // import MainLayout from "./component/Layout/MainLayout";
  // import NotFound from "./component/NotFound/NotFound";
  // import Cheek from "./component/Cheek/Cheek";
  // import Login from "./component/Login/Login";

  // import Signup from "./component/Signup/Signup";
  // import MainLogin from "./component/Layout/MainLogin";
  // import ForgetPassword from './component/ForgetPassword/ForgetPassword';
// import DashBord from './component/DashBord/DashBord';
// import FAQs from './component/FAQs/FAQs';


  // export default class App extends Component {
  //   routers = createBrowserRouter([
  //     {
  //       path: "",
  //       element: <MainLayout />,
  //       errorElement: <NotFound />,
  //       children: [
  //         { path: "", element: <Home /> },
  //         { path: "/Home", element: <Home /> },
  //         { path: "/Login", element: <Login /> },
  //         { path: "/Signup", element: <Signup /> },
  //         { path: "/Cheek", element: <Cheek /> },
  //         { path: "/Footer", element: <Footer /> },
  //         { path: "/ForgetPass", element: <ForgetPassword/>},
  //       ],
  //     },
  //   ]);

  //   // routers = createBrowserRouter([
  //   //   {
  //   //     path: "",
  //   //     element: <MainLogin />,
  //   //     errorElement: <NotFound />,
  //   //     children: [{ path: "/Login", element: <Login /> }],
  //   //   },
  //   // ]);

  //   render() {
  //     return (
  //       <>
  //         <div>
  //           <RouterProvider
  //             router={(this.routers)}
  //           />
  //         </div>
  //       </>
  //     );
  //   }

