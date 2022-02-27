import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import PageNotFound from "./Components/PageNotFound/Pagenotfound";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
