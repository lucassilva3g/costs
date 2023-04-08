import styles from '../project/ProjectCard.module.css'
//import { BsFillTrash } from 'react-icons/bs'
function ServiceCard(id, name, description, cost, handleRemove) {

const remove = (e) => {

}

return (
<div className={styles.project_card}>
<h4>{name}</h4>
<p>
<span>Custo Total:</span> R${cost}
</p>
<p>
{description}
</p>
<div className={styles.project_card_actions}>
  <button onClick={remove}>
    {/* <BsFillTrash /> */}
    Excluir
  </button>
</div>
</div>
)
}

export default ServiceCard
