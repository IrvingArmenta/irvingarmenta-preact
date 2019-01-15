import { h, Component } from "preact";
import Router from "preact-router";
import Helmet from "preact-helmet";
import cookies from "browser-cookies";
import Between from "between.js";
import Easing from 'easing-functions';

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

// json languages
import esJson from "./lang/es.json";
import enJson from "./lang/en.json";
import jaJson from "./lang/ja.json";

// Function for select the correct json object
const langSelection = language => {
  if(language === "es") {
    return esJson
  } else if(language === "ja") {
    return jaJson
  } else {
    return enJson
  }
}

const JAfont = {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=M+PLUS+1p:300,700"};

// App component
class App extends Component {
  constructor(props) {
    super(props);
    //cookies.erase('selectedLang')
    const userLanguage = sessionStorage.getItem("selectedLang") ? sessionStorage.getItem("selectedLang") : this.props.browserLang;

    this.state = {
      language: userLanguage,
      jsonLang: langSelection(userLanguage),
      reveal: true,
      opacity: 0
    };
  }

  setPageLanguage = language => {
    const langTimeout = 400;
    const siteHeader = document.getElementById('appHeader');
    if(language !== this.state.language) {
      new Between(this.state.opacity, 0).time(langTimeout)
      .loop("bounce", 2)
      .on("update", (value, {times}) => {
          this.setState({
            opacity: `${value.toFixed(2)}`
          });
      }).on("start", () => {
        siteHeader.classList.add("disabled")
        setTimeout(() => {
          this.setState({
            language: language,
            jsonLang: langSelection(language),
          });
        },langTimeout);
      }).on("complete", () => {
        siteHeader.classList.remove("disabled")
      });
    } else {
      return false;
    }
  }

  onRouteChange = event => {
    setTimeout(() => {
      this.setState({reveal: true});
    }, 150);
  }

  componentDidMount() {
    new Between(0, 1).time(2000).easing(Between.Easing.Quintic.InOut).on('update', v => {
      this.setState({ opacity: v.toFixed(2) });
    });
  }

  render() {
    const siteLanguage = this.state.language;
    const languageObject = this.state.jsonLang;
    const jaLangFont = siteLanguage === "ja" ? JAfont : "";
    const sectionStyle = {
      opacity: `${this.state.opacity}`
    };

    return(
      <section style={sectionStyle}>
        <Helmet
          htmlAttributes={{lang: siteLanguage}}
          titleAttributes={{itemprop: "name", lang: siteLanguage}}
          title="Frontend"
          titleTemplate="%s | Irving Armenta"
          link={[
            jaLangFont
          ]}
        />
      <Header setPageLanguage={this.setPageLanguage} langJson={languageObject} currentLang={siteLanguage} />
        <div className="app__content" id="appWrap" >
          <div id="appContent" aria-live="polite" >
          <Router onChange={this.onRouteChange}>
            <Home path="/" langJson={languageObject} reveal={this.state.reveal} />
            <About path="/about" langJson={languageObject} reveal={this.state.reveal} />
            <Contact path="/contact" langJson={languageObject} reveal={this.state.reveal} />
            <Error404 type="404" default langJson={languageObject} reveal={this.reveal} />
          </Router>
          </div>
          </div>
        <Footer />
      </section>
    );
  }
}

export default App;
