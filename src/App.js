import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import imgLogo from "./components/R.png";
import navStyle from './components/navbar.css';
import Router from './components/router';

function App() {
  return (
    <>
      <Navbar imageLink={imgLogo} navStyle={navStyle} />
      <Router />
      <Footer />
    </>
  );
}

export default App;
