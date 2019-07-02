import { Component, h } from "preact";
import { RoutableProps, Route, Router, RouterOnChangeArgs,  } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

export interface Theme {
    theme: string;
}

type MainAppTypes = Theme;

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component<MainAppTypes> {
    public currentUrl?: string;

    public state = {
        theme: 'default'
    }

    constructor(props: MainAppTypes) {
        super(props);
    }

    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        const { theme } = this.state;
        return (
            <div id="app">
                <Header />
                <Router>
                    <Home path="/" theme={theme} />
                    <Profile path="/profile/" user="me" />
                    <Profile path="/profile/:user" />
                </Router>
                <button style={{position:'absolute', bottom: 0}} onClick={this.changeTheme}>Change Theme</button>
            </div>
        );
    }

    private changeTheme = (e: MouseEvent) => {
        this.setState({
            theme: this.state.theme === 'default' ? 'dark' : 'default'
        })
    }
}