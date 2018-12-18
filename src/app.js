import { h, Component } from "preact";
import Router from "preact-router";
import Helmet from "preact-helmet";
import cookie from "browser-cookies";

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

const langSelection = language => {
  if(language === 'es') {
    return es
  } else if(language === 'ja') {
    return ja
  } else {
    return en
  }
}

const JAfont = {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=M+PLUS+1p:400,700"};


// App component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {language: this.props.browserLang, jsonLang: langSelection(this.props.browserLang)};
  }

  setPageLanguage = language => {
    this.setState({
      language: language,
      jsonLang: langSelection(language)
    });
  }

  onRouteChange = event => {
    console.log(event)
  }

  render() {
    let siteLanguage = this.state.language;
    let languageObject = this.state.jsonLang;
    const jaLangFont = siteLanguage === "ja" ? JAfont : '';

    return(
      <section>
        <Helmet
          htmlAttributes={{lang: siteLanguage, amp: undefined}}
          titleAttributes={{itemprop: "name", lang: siteLanguage}}
          title="Frontend"
          titleTemplate="%s | Irving Armenta"
          link={[
            jaLangFont
          ]}
        />
      <Header setPageLanguage={this.setPageLanguage} langJson={languageObject} currentLang={siteLanguage} />
        <div className="app__content">
          <Router onChange={this.onRouteChange}>
            <Home path="/" langJson={languageObject} />
            <About path="/about" langJson={languageObject} />
            <Contact path="/contact" langJson={languageObject} />
            <Error404 type="404" default langJson={languageObject} />
          </Router>
          </div>
        <Footer />
      </section>
    );
  }
}

export default App;
