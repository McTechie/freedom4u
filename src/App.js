import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Donation from './pages/Donation';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/donate">
              <Donation />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <hr className="mx-4 mt-5" />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
 
export default App;