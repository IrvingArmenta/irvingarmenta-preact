import { h, Component} from "preact";

const Error404 = ({type}) => (
  <div>
   <span>- Not Found -</span><br />
   <span>Error {type}</span>
  </div>
);

export default Error404;
