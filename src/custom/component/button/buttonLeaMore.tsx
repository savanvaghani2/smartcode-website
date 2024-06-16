import styles from './learmore.module.css'
export const ButtonLearnMore = (props) =>{

    return (
        <button style={styles.button}>
            {props.children}
        </button>
    )
}
