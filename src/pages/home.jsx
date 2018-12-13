import { h, Component} from "preact";
import jap from '../lang/ja';


class Home extends Component {
  render() {
    return(
      <div>
        {jap.greet}
      </div>
    );
  }
}

export default Home;
