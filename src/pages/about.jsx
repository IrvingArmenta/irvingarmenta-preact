import { h, Component} from "preact";
import Helmet from "preact-helmet";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = (props) => {
    this.state = {
      reveal: this.props.reveal
    };
  }

  render() {
    let revealed = this.state.reveal ? "fadeInUp animated" : "not-loaded";
    let {langJson} = this.props;
    return(
      <div className={revealed}>
        <Helmet title="About" />
        <h1 class="heading">- {langJson.navigation.about} -</h1>
        <p>{langJson.dummyText}</p>
      </div>
    );
  }
}

export default About;
