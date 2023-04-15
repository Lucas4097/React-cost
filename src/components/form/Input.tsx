import styles from './Input.module.css'

type Props = {
    type?: string;
    text?: string;
    name?: string;
    placeholder?: string;
    handleOnChange?: any;
    value?: string;
}

function Input({ type, text, name, placeholder, handleOnChange, value }: Props) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    )
}

export default Input