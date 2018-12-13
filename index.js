import { h, Component, render } from "preact";
import App from "./src/app";
import WebfontLoader from 'preact-webfont-loader';
const root = document.getElementById("root");

const config = {
  google: {
    families: ['M PLUS 1p:400,900'],
  }
};

render(
  <WebfontLoader config={config}>
    <App />
  </WebfontLoader>
  ,root);

if (process.env.NODE_ENV === "development") {
  // react developer tools
  require("preact/debug");
}
