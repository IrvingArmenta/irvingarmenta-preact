import { h, Component} from "preact";
// ui
import Navigation from "../ui/navigation";
import LanguageButtons from "../ui/LanguageButtons";

class Header extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props.currentLang)
  }

  render() {
    const {setPageLanguage,currentLang,langJson} = this.props;
    return(
      <header id="appHeader" className="app__header">
        <Navigation location={window.location.pathname} langJson={langJson} />
        <LanguageButtons setPageLanguage={setPageLanguage} currentLang={currentLang} langJson={langJson} />
      </header>
    );
  }
}

export default Header;
