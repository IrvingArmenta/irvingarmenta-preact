import { Component, h } from "preact";
import { ifClass } from '../../helpers/tsHelpers';
import { LangCodeTypes } from "../../lang/lang-exports";
import style from "./style.scss";
const { buttonOutline, buttonRounded, button } = style;

interface RippleButtonCustomProps {
    rounded?: boolean; 
    text?: string; 
    onClick?: (e: MouseEvent) => void;
    title?: string;
    disabled?: boolean;
    theme?: string;
    lang?: LangCodeTypes;
    outline?: boolean;
}

type RippleButtonProps = RippleButtonCustomProps;

class RippleButton extends Component<RippleButtonProps> {

    public render() {
        const { 
            rounded, 
            text, 
            onClick, 
            children, 
            theme, 
            outline, 
            ...rest 
        } = this.props;
        
        return (
           <button 
           onClick={onClick} 
           onMouseDown={this.rippleEffect} 
           className={`
                ${button} 
                ${ifClass(buttonOutline, outline)}
                ${ifClass(buttonRounded, rounded)}
           `}
           {...rest}
           >
            {!text && children}
           </button>
        );
    }

    private rippleEffect = (e: MouseEvent) => {
        const ripple = e.currentTarget as HTMLButtonElement;
        const posX = e.pageX - ripple.getBoundingClientRect().left;
        const posY = e.pageY - ripple.getBoundingClientRect().top;
        const waveWidth = 1.5 * ripple.getBoundingClientRect().width;
        const divRippleEffect = document.createElement('span');
        divRippleEffect.className = style.rippleEffect;
        divRippleEffect.style.width = `${waveWidth}px`;
        divRippleEffect.style.height = `${waveWidth}px`;
        divRippleEffect.style.left = `${ posX - (waveWidth / 2) }px`;
        divRippleEffect.style.top = `${ posY - (waveWidth / 2) }px`;
        ripple.appendChild(divRippleEffect);
        window.setTimeout(() => {
            ripple.removeChild(divRippleEffect);
        }, 2000);
    }
}

export default RippleButton;