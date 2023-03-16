import {Link} from 'react-router-dom'
import styles from '../layout/LinkButton.module.css';

 function LinkButton({to, text}) {//o 'to' eh utilizado para o link e o 'text' eh o texto do link
     return (
         <Link className={styles.btn} to={to}>
             {text}
         </Link>
     )

 }

export default LinkButton;