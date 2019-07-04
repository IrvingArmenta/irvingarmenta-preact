import { Component, h } from "preact";
import Helmet from "preact-helmet";
import { Router, RouterOnChangeArgs } from "preact-router";
import { getByBracket } from "../helpers/tsHelpers";
import Footer from "./footer";
import Header from "./header";
import styles from './styles.scss';

// Language
import detectBrowserLanguage from 'detect-browser-language'
import { initialLang, LangCodeTypes, LangJson, LangObject } from "../lang/lang-exports";

// Views
import Home from "../routes/home";
import Profile from "../routes/profile";

enum ThemeNames {
    'theme_default',
    'theme_dark',
    'theme_pixel',
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

const languageInitialState = sessionStorage.getItem('lang') as LangCodeTypes || initialLang(detectBrowserLanguage());
const langJsonInitialState = getByBracket(LangJson, initialLang(sessionStorage.getItem('lang') || detectBrowserLanguage()));
const themeInitialState = sessionStorage.getItem('theme') as ThemesType || 'theme_default';

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

    public componentWillUnmount() {
        sessionStorage.clear();
    }

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
                        <Profile {...this.state} theme={theme} path="/profile/:user" />
                    </Router>
                    <ul className={styles.selectLang}>
                        <li><button onClick={this.changeLang} data-lang="es">{langJson.langButtons.es}</button></li>
                        <li><button onClick={this.changeLang} data-lang="ja">{langJson.langButtons.ja}</button></li>
                        <li><button onClick={this.changeLang} data-lang="en">{langJson.langButtons.en}</button></li>
                    </ul>
                    <ul className={styles.selectLang}>
                        <li><button onClick={this.changeTheme} data-theme="theme_default">{langJson.themeButtons.default}</button></li>
                        <li><button onClick={this.changeTheme} data-theme="theme_dark">{langJson.themeButtons.dark}</button></li>
                        <li><button onClick={this.changeTheme} data-theme="theme_pixel">{langJson.themeButtons.pixel}</button></li>
                    </ul>
                </main>
                <Footer />
            </div>
        );
    }

    private changeTheme = (e: any) => {
        const selectedTheme = e.currentTarget.dataset.theme as ThemesType;
        sessionStorage.setItem('theme', selectedTheme);
        this.setState({
            theme: selectedTheme
        })
    }

    private changeLang = (e: any) => {
        const languageString = e.currentTarget.dataset.lang as 'es' | 'en' | 'ja';
        sessionStorage.setItem('lang', languageString);
        this.setState({
            language: languageString,
            langJson: getByBracket(LangJson, languageString),
        });
    }
}