import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import PageNotFound from "./Components/PageNotFound/Pagenotfound";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import NUser from "./Components/NewUser/NUser";
import Edituser from "./Components/EditUser/Edituser";
import UserP from "./Components/UserProfile/UserP";
import UserDetails from "./Components/UserProfile/UserDetails";
import FormValidation from "./Components/FormValidation/FormValidation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/nuser" element={<NUser />} />
          <Route path="/redux" element={<UserP />} />
          <Route path="/fv" element={<FormValidation />} />
          <Route path="/details/:id" element={<UserDetails />} />
          <Route path="/edit/:id" element={<Edituser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
