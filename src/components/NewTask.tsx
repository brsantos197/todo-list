import { Plus } from "phosphor-react";
import styles from './NewTask.module.css'

export const NewTask = () => {
  return (
    <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button><span>Criar</span> <Plus weight="bold" size={16} className={styles.icon} /></button>
      </form>
  );
}