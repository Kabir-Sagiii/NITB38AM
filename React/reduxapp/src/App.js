import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";
import GithubHome from "./Components/Github/GithubHome";
import State from "./Components/Hooks/useState/State";
import Effect from "./Components/Hooks/useEffect/Effect";
import ContextHome from "./Components/Hooks/useContext/Home";
import Login from "./Components/Hooks/useRef/Login";
import User from "./Components/Hooks/useReducer/User";

function App() {
  return (
    <div className="App mt-5">
      {/* <p className="display-3">Welcome to Redux</p> */}
      {/* <Home /> */}
      {/* <GithubHome /> */}
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <ContextHome /> */}
      {/* <Login /> */}
      <User />
    </div>
  );
}

export default App;
