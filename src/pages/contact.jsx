import { h, Component} from "preact";
import Helmet from 'preact-helmet';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = (props) => {
    this.state = {
      reveal: this.props.reveal
    }
  }

  render() {
    let revealed = this.state.reveal ? "fadeInUp animated" : "not-loaded";
    let {langJson} = this.props;
    return(
      <div className={revealed}>
        <Helmet title="Contact"/>
        <h1 className="heading">- {langJson.navigation.contact} -</h1>
      </div>
    );
  }

}

export default Contact;
