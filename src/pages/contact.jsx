import { h, Component} from "preact";
import Helmet from 'preact-helmet';

const Contact = ({langJson}) => {
  return(
    <div>
      <Helmet title="Contact"/>
      <h1 className="heading">- Contact -</h1>
    </div>
  );
}

export default Contact;
