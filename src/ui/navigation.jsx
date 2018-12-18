import { h, Component} from "preact";
import { Link } from "preact-router/match";

const appRoutes = [
  {title:"home",linkPath:"/"},
  {title:"about",linkPath:"/about"},
  {title:"contact",linkPath:"/contact"}
];

class Navigation extends Component {
  render() {
    const {langJson} = this.props;
    return(
      <nav className="main-nav" aria-label="Irving Armenta Site Navigation">
        <ul aria-label="Irving Armenta Navigation" role="menubar">
        {
          appRoutes.map((link,i) => (
            <li key={`nav-li-${i}`}>
              <Link tabindex="0" role="menuitem" activeClassName="current" href={link.linkPath}>{langJson.navigation[link.title]}</Link>
            </li>
          ))
        }
        </ul>
      </nav>
    );
  }
};

export default Navigation;
