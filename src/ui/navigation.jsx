import { h, Component} from "preact";
import { Link } from "preact-router/match";

const appRoutes = [
  {title:"Home",linkPath:"/"},
  {title:"About",linkPath:"/about"},
  {title:"Contact",linkPath:"/contact"}
];

class Navigation extends Component {
  render() {
    return(
      <nav className="nav" aria-label="Irving Armenta Navigation">
        <ul aria-label="Irving Armenta Navigation" role="menubar">
        {
          appRoutes.map((link,i) => (
            <li key={`nav-li-${i}`}>
              <Link tabindex="0" role="menuitem" activeClassName="current" href={link.linkPath}>{link.title}</Link>
            </li>
          ))
        }
        </ul>
      </nav>
    );
  }
};

export default Navigation;
