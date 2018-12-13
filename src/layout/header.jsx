import { h, Component} from "preact";

// ui
import Navigation from "../ui/navigation";

class Header extends Component {
  render() {
    return(
      <header id="appHeader" className="app__header">
      - header -
      <Navigation location={window.location.pathname} />
      </header>
    );
  }
}

export default Header;
