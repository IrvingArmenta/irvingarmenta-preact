import { h, Component} from "preact";

const langButtons = [
  {langCode:"en"},
  {langCode:"es"},
  {langCode:"ja"}
];

class languageButtons extends Component {
  constructor(props) {
    super(props);
  }

  onLangButtonClick(language) {
    this.props.setPageLanguage(language)
  }

  activeClass = (lang) => {
    return this.props.currentLang === lang ? 'active' : ''
  }

  render() {
    const {langJson} = this.props;
    return (
      <nav aria-label="Irving Armenta - language change navigation">
        <ul className="lang-nav" aria-label="Irving Armenta - language change navigation" role="menubar">
          {
            langButtons.map((button,i) => (
              <li>
                <button role="menuitem" key={`langButton-${i}`} className={this.activeClass(button.langCode)} onClick={(language) => this.onLangButtonClick(button.langCode)}>{langJson.langButtons[button.langCode]}</button>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
};

export default languageButtons;
