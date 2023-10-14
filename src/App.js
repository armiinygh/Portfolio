import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
const App = () => {
  return (
      <>
      <Header/>
          <main className="main">
              <Home />
              <About />
              <Qualification />
              <Skills />
              <Services />
          </main>
      </>
  )
}
export default App;
