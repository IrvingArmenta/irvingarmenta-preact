import { h, Component, render } from "preact";
import App from "./src/app";
const root = document.getElementById("root");

render(<App />,root);

if (process.env.NODE_ENV === 'development') {
  // react developer tools
  require("preact/debug");
}
