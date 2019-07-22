import { Component, h } from "preact";
import { ThemesType } from '../../components/app';
import { getByBracket } from "../../helpers/tsHelpers";
import { LangObject } from "../../lang/lang-exports";
// Themes
import themeDark from './themeDark.scss';
import themeDefault from './themeDefault.scss';
import themePixel from './themePixel.scss';

const Themes = {
    themeDark,
    themeDefault,
    themePixel,
}

export default class Home extends Component<{theme: ThemesType, langJson: LangObject }> {

    public render() {
        const { theme, langJson } = this.props;
        const styles = getByBracket(Themes, theme);
        return (
            <div class={styles.home}>
                {this.props.theme}
                <h1>Home</h1>
                <p>This is the Home component. {langJson.home.msg}</p>
                <div className={`${styles.box} animation-floating`} ><p className={themeDefault.boxText}>Text</p></div>
            </div>
        );
    }
}
