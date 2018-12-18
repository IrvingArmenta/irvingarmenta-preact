import { h, Component} from "preact";
import Helmet from "preact-helmet";

const Error404 = ({type, langJson}) => (
  <div>
    <Helmet title="Error 404"/>
   <span>- Not Found -</span><br />
   <span>Error {type}</span>
  </div>
);

export default Error404;
