import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; // Integrating bootstrap with react app

import Header from "./Components/Header/Header";
// import Main from "./Components/Main/Main";
// import Footer from "./Components/Footer/Footer";
// import Section from "./Components/Sectons/Section";
// import FirstState from "./Components/State/FirstState";
// import ProfileState from "./Components/State/ProfileState";
// import A from "./Components/Relationships/Parent-Child/A";
// import B from "./Components/Relationships/Parent-Child/B";
// import User from "./Components/Parent-Child/User";
// import ProfileHome from "./Components/Profile/ProfileHome";
// import Parent from "./Components/Child-Parent/Parent";
import Home from "./Components/ChatApp/Home";
import UserProfile from "./Components/UserProfile/UserProfile";
import AxiosUser from "./Components/Axios/AxiosUser";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ContextA from "./Components/ContextAPI/A";
import ContextHome from "./Components/ContextTask/Home";
import Mounting from "./Components/Lifecyle/Mounting";
import UpdatingPhase from "./Components/Lifecyle/UpdatingPhase";
import HOCHome from "./Components/HOC/HOCHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/chatapp" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/axios" element={<AxiosUser />} />
          <Route path="/userprofile" element={<ProfileCard />} />
          <Route path="/ct" element={<ContextA />} />
          <Route path="/contextapitask" element={<ContextHome />} />
          <Route path="/UP" element={<UpdatingPhase />} />
          <Route path="/hoc" element={<HOCHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <h2>Welcome to React World</h2>
      <Header />
      <Main />
      <Footer />
      <Section /> */}
      {/* <FirstState /> */}
      {/* <ProfileState /> */}
      {/* <B /> */}
      {/* <User /> */}
      {/* <ProfileHome /> */}
      {/* <Parent /> */}
      {/* <Home /> */}
      {/* <UserProfile /> */}
      {/* <AxiosUser /> */}
    </div>
  );
}

export default App;
