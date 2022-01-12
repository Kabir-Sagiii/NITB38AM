import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; // Integrating bootstrap with react app
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Sectons/Section";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React World</h2>
      <Header />
      <Main />
      <Footer />
      <Section />
    </div>
  );
}

export default App;
