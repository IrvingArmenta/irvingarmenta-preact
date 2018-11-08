import { h, Component } from "preact";
import Router from 'preact-router';

// layout
import Header from './layout/header';
import Footer from './layout/footer';

// pages
import About from './pages/about';
import Home from './pages/home';

import Error404 from './pages/error404';

const testing = "TEST";

class App extends Component {
  render() {
    return(
      <section>
        <Header />
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Error404 type="404" default />
          </Router>
        <Footer />
      </section>
    )
  }
}

export default App;
