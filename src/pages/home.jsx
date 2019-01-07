import { h, Component} from "preact";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = (props) => {
    this.state = {
      reveal: this.props.reveal
    }
  }

  render() {
    const {langJson} = this.props;
    let revealed = this.state.reveal ? "fadeInUp animated" : "not-loaded";
    return(
      <div className={revealed}>
        <h1 className="heading">- {langJson.greet} -</h1>
      </div>
    );
  }
}

export default Home;
