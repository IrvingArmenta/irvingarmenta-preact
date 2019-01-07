import { h, Component } from "preact";
import Router from "preact-router";
import Helmet from "preact-helmet";
import cookies from "browser-cookies";

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
import es from "./lang/es.json";
import en from "./lang/en.json";
import ja from "./lang/ja.json";

// Function for select the correct json object
const langSelection = language => {
  if(language === 'es') {
    return es
  } else if(language === 'ja') {
    return ja
  } else {
    return en
  }
}

const JAfont = {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=M+PLUS+1p:300,700"};

// App component
class App extends Component {
  constructor(props) {
    super(props);
    //cookies.erase('selectedLang')
    const userLanguage = sessionStorage.getItem('selectedLang') ? sessionStorage.getItem('selectedLang') : this.props.browserLang;

    this.state = {
      language: userLanguage,
      jsonLang: langSelection(userLanguage),
      reveal: true
    };
  }

  setPageLanguage = language => {
    this.setState({
      language: language,
      jsonLang: langSelection(language),
    });
  }

  onRouteChange = event => {
    setTimeout(() => {
      this.setState({reveal: true})
    }, 150)
  }

  render() {
    const siteLanguage = this.state.language;
    const languageObject = this.state.jsonLang;
    const jaLangFont = siteLanguage === "ja" ? JAfont : "";

    return(
      <section>
        <Helmet
          htmlAttributes={{lang: siteLanguage, amp: undefined, style: "opacity: 1"}}
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
