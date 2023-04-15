import styles from "./SubmitButton.module.css"

type Props = {
    text:string
}

function SubmitButton({ text }:Props){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton