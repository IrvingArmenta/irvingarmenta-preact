// Language
import detectBrowserLanguage from 'detect-browser-language';
import { Component, h } from "preact";
import Helmet from "preact-helmet";
import { Router, RouterOnChangeArgs } from "preact-router";
import { getByBracket } from "../helpers/tsHelpers";
import { initialLang, LangCodeTypes, LangJson, LangObject } from "../lang/lang-exports";
// Views
import Home from "../routes/home";
import Profile from "../routes/profile";
import Footer from "./footer";
import Header from "./header";
import RippleButton from "./ripplebutton";
import styles from './styles.scss';



enum ThemeNames {
    'themeDefault',
    'themeDark',
    'themePixel',
}

export type ThemesType = keyof typeof ThemeNames;

type MainAppTypes = ThemesType;
interface MainAppState {
    theme: ThemesType;
    language: LangCodeTypes;
    langJson: LangObject;
}

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const languageInitialState = sessionStorage.getItem('lang') as LangCodeTypes
    || initialLang(detectBrowserLanguage());
const langJsonInitialState = getByBracket(LangJson, initialLang(sessionStorage.getItem('lang') 
|| detectBrowserLanguage()));
const themeInitialState = sessionStorage.getItem('theme') as ThemesType || 'themeDefault';

export default class App extends Component<MainAppTypes, MainAppState> {
    public currentUrl?: string;

    constructor(props: MainAppTypes) {
        super(props);
        this.state = {
            theme: themeInitialState,
            language: languageInitialState,
            langJson: langJsonInitialState,
        }
    }

    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        const { theme, language, langJson } = this.state;
        return (
            <div id="app">
                <Helmet
                    htmlAttributes={{ lang: language, amp: undefined }}
                    titleAttributes={{ itemprop: "name", lang: language }}
                    title="Frontend"
                    titleTemplate="%s | Irving Armenta"
                />
                <Header />
                <main className="main">
                    <Router onChange={this.handleRoute}>
                        <Home path="/" {...this.state} />
                        <Profile {...this.state} path="/profile/" user="me" />
                        <Profile {...this.state} path="/profile/:user" />
                    </Router>
                    <ul className={styles.selectLang} style={{ right: 16, top: 16 }}>
                        <li>
                            <RippleButton
                                outline={true}
                                lang={language}
                                title="es"
                                onClick={this.changeLang}
                                data-lang="es">
                                {langJson.langButtons.es}
                            </RippleButton>
                        </li>
                        <li>
                            <RippleButton
                                lang={language}
                                onClick={this.changeLang}
                                data-lang="ja">
                                {langJson.langButtons.ja}
                            </RippleButton>
                        </li>
                        <li>
                            <RippleButton 
                                lang={language} 
                                onClick={this.changeLang} 
                                data-lang="en">
                                {langJson.langButtons.en}
                            </RippleButton>
                        </li>
                    </ul>
                    <ul className={styles.selectLang} style={{ right: 16, bottom: 16 }}>
                        <li>
                            <button onClick={this.changeTheme} data-theme="themeDefault">
                                {langJson.themeButtons.default}
                            </button>
                        </li>
                        <li>
                            <button onClick={this.changeTheme} data-theme="themeDark">
                                {langJson.themeButtons.dark}
                            </button>
                        </li>
                        <li>
                            <button onClick={this.changeTheme} data-theme="themePixel">
                                {langJson.themeButtons.pixel}
                            </button>
                        </li>
                    </ul>
                </main>
                <Footer />
            </div>
        );
    }

    private changeTheme = (e: MouseEvent) => {
        const clickedButton = e.currentTarget as HTMLElement;
        const selectedTheme = clickedButton.dataset.theme as ThemesType;

        // save in sessionStorage
        sessionStorage.setItem('theme', selectedTheme);

        this.setState({
            theme: selectedTheme
        })
    }

    private changeLang = (e: MouseEvent) => {
        const clickedButton = e.currentTarget as HTMLElement;
        const languageString = clickedButton.dataset.lang as 'es' | 'en' | 'ja';

        // save in sessionStorage
        sessionStorage.setItem('lang', languageString);

        this.setState({
            language: languageString,
            langJson: getByBracket(LangJson, languageString),
        });
    }
}