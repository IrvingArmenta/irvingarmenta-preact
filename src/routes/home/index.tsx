import { Component, h } from "preact";
import { ThemesType } from '../../components/app';
import { getByBracket } from "../../helpers/tsHelpers";
import { LangObject } from "../../lang/lang-exports";
// Themes
import theme_dark from './themeDark.scss';
import theme_default from './themeDefault.scss';
import theme_pixel from './themePixel.scss';

const Themes = {
    theme_dark,
    theme_default,
    theme_pixel,
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
                <div className={`${styles.box} animation-floating`} ><p className={theme_default.boxText}>Text</p></div>
            </div>
        );
    }
}
