import styles from './Select.module.css'

type Props = {
    text?: string;
    name?: string;
    options?: any;
    handleOnChange?: any;
    value?: string;
}

function Select({ text, name, options, handleOnChange, value }: Props) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option disabled>Selecione uma opção</option>
                {options.map((option:any) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select