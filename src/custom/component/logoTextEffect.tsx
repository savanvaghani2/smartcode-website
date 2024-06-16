import { Component } from 'solid-js';
import styles from './logoTextEffect.module.css';

interface LogoTextEffectProps {
    text: string;
}

const LogoTextEffect: Component<LogoTextEffectProps> = (props) => {
    return (
        <button class={styles.button}  data-text="Awesome">
            <span class="actual-text">&nbsp;{props.text}&nbsp;</span>
            <span aria-hidden="true" class={styles.hoverText}>&nbsp;{props.text}&nbsp;</span>
        </button>
    );
};

export default LogoTextEffect;
