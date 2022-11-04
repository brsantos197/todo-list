import { Trash } from "phosphor-react";

import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'

export const Tasks = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.tasksCreated}>Tarefas criadas</span><span className={styles.count}>0</span>
        </div>
        <div>
          <span className={styles.tasksCompleteCount}>Concluídas</span><span className={styles.count}>0 de 0</span>
        </div>
      </header>
      {/* <div className={styles.contentEmpty}>
        <img src={clipboard} />
        <p className={styles.title}>Você ainda não tem tarefas cadas tradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div> */}
      <div className={styles.content}>
        <div className={styles.task}>
          <input type="checkbox" />
          <p className={styles.taskTextComplete}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <Trash size={24} className={styles.icon} />
        </div>
      </div>
    </div>
  );
}