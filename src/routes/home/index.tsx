import { Component, h } from "preact";
import { ThemesType } from '../../components/app';
import { getByBracket } from "../../helpers/tsHelpers";
// Themes
import theme_dark from './themeDark.scss';
import theme_default from './themeDefault.scss';
import theme_pixel from './themePixel.scss';

const Themes = {
    theme_dark,
    theme_default,
    theme_pixel,
}

export default class Home extends Component<{theme: ThemesType}> {

    public render() {
        const { theme } = this.props;
        const styles = getByBracket(Themes, theme);
        return (
            <div class={styles.home}>
                {this.props.theme}
                <h1>Home</h1>
                <p>This is the Home component.</p>
                <div className={styles.box} ><p className={theme_default.boxText}>Text</p></div>
            </div>
        );
    }
}
