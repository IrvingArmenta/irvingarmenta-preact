import { Component, h } from "preact";
import * as style from "./styles.scss";

export default class Footer extends Component {
    public render() {
        return (
            <footer className={`${style.footer} footer`} />
        );
    }
}
