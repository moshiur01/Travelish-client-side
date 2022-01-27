import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Provider from "./Hooks/Provider";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact={true} element={<Login></Login>}></Route>
            <Route
              path="/dashboard"
              exact={true}
              element={<Dashboard></Dashboard>}
            ></Route>
            <Route
              path="/about"
              exact={true}
              element={<AboutUs></AboutUs>}
            ></Route>
            <Route path="/" exact={true} element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
