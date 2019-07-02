import { Component, h } from "preact";
import * as themeDark from "./theme-dark.scss";
import * as themeDefault from "./theme-default.scss";


export default class Home extends Component<{theme: string}> {
    public styles?: object;

    public render() {
        const styles = this.props.theme === 'default' ? themeDefault : themeDark;
        return (
            <div class={styles.home}>
                {this.props.theme}
                <h1>Home</h1>
                <p>This is the Home component.</p>
                <div className={styles.box} />
            </div>
        );
    }
}
