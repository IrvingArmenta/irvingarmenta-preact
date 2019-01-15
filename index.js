import "@babel/polyfill";
import { h, Component, render } from "preact";
import App from "./src/app";
import WebfontLoader from 'preact-webfont-loader';
import getBrowserLanguage from 'get-browser-language';

const webFontConfig = {
  google: {
    families: ["Lato:300","Heebo:700"]
  }
};

// Function to prevent strings like `en-AUS` or `es-US` etc. and just limit the results to the
// inner options I set up. default language is "en" - English
const language = browserLang => {
  let lang = browserLang.substring(0,2);
 if (lang === "es") {
    return "es";
  } else if (lang === "ja") {
    return "ja";
  } else {
    return "en";
  }
}

const appLang = language(getBrowserLanguage());

render(
  <WebfontLoader config={webFontConfig}>
    <App browserLang={appLang} />
  </WebfontLoader>
  ,document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  // react developer tools
  require("preact/debug");
}
