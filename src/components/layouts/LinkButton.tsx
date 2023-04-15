import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

interface Props {
    to?: any;
    text?: string;
}

function LinkButton({ to, text }:Props){
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton