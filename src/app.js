import { h, Component } from "preact";
import Router from "preact-router";

// global styles
import "./styles/global-styles.scss";

// layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// pages
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Error404 from "./pages/error404";

class App extends Component {
  render() {
    return(
      <section>
        <Header />
        <div className="app__content">
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Error404 type="404" default />
          </Router>
          </div>
        <Footer />
      </section>
    );
  }
}

export default App;
