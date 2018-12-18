import { h, Component} from "preact";
import Helmet from "preact-helmet";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Helmet title="About" />
        <h1 className="heading">- About -</h1>
      </div>
    );
  }
}

export default About;
