import { Component, h } from "preact";
import { route, Router, RouterOnChangeArgs } from "preact-router";
import Home from "../routes/home";
import Profile from "../routes/profile";
import Footer from "./footer";
import Header from "./header";


enum ThemeNames {
    'theme_default',
    'theme_dark',
    'theme_pixel',
}

export type ThemesType = keyof typeof ThemeNames;

export const ThemesArray: ThemesType[] = [
    'theme_default',
    'theme_dark',
    'theme_pixel'
];
let counter = 0;

type MainAppTypes = ThemesType;

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component<MainAppTypes, {theme: ThemesType}> {
    public currentUrl?: string;

    constructor(props: MainAppTypes) {
        super(props);
        this.state = {
            theme: 'theme_default'
        }
    }

    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
        console.log(e);
    };

    public render() {
        const { theme } = this.state;
        return (
            <div id="app">
                <Header />
                <main className="main">
                    <Router onChange={this.handleRoute}>
                        <Home path="/" theme={theme} />
                        <Profile theme={theme} path="/profile/" user="me" />
                        <Profile theme={theme} path="/profile/:user" />
                    </Router>
                    <button style={{position:'absolute', bottom: 0}} onClick={this.changeTheme}>Change Theme</button>
                </main>
                <Footer />
            </div>
        );
    }

    private changeTheme = (e: MouseEvent) => {
        counter = ++counter % ThemesArray.length;
        this.setState({
            theme: ThemesArray[counter]
        })
    }
}