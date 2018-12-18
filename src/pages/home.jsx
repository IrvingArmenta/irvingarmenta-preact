import { h, Component} from "preact";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {langJson} = this.props;
    return(
      <div>
        <h1 className="heading">{langJson.greet}</h1>
      </div>
    );
  }
}

export default Home;
