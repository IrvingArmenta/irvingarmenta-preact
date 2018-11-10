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
      <nav className="nav">
        <ul>
        {
          appRoutes.map((link,i) => (
            <li key={`nav-li-${i}`}>
              <Link activeClassName="current" href={link.linkPath}>{link.title}</Link>
            </li>
          ))
        }
        </ul>
      </nav>
    );
  }
}

export default Navigation;
