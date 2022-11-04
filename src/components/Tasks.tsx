import { ChangeEvent } from "react";
import { Trash } from "phosphor-react";

import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'

export interface Task {
  name: string;
  status: boolean;
}

interface TasksProps {
  tasks: Task[];
  handleChangeStatus: (taskToChange: Task, e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveTask: (taskToRemove: Task) => void;
}

export const Tasks = ({ tasks, handleChangeStatus, handleRemoveTask }: TasksProps) => {

  tasks = tasks.sort((a, b) => {
    if (a.status) {
      return 1
    } else {
      return -1
    }
    return 0
  })

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.tasksCreated}>Tarefas criadas</span><span className={styles.count}>{tasks.length}</span>
        </div>
        <div>
          <span className={styles.tasksCompleteCount}>Concluídas</span><span className={styles.count}>{tasks.filter(t => t.status).length} de {tasks.length}</span>
        </div>
      </header>
      {
        tasks.length === 0 ? (<div className={styles.contentEmpty}>
          <img src={clipboard} />
          <p className={styles.title}>Você ainda não tem tarefas cadas tradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>) : (<div className={styles.content}>
          {tasks.map(task => (
            <div key={task.name} className={`${styles.task} ${task.status ? styles.taskComplete : ''}`}>
              <input type="checkbox" checked={task.status} onChange={(e) => handleChangeStatus(task, e)} />
              <p className={task.status ? styles.taskTextComplete : styles.taskText}>{task.name}</p>
              <Trash onClick={() => handleRemoveTask(task)} size={24} className={styles.icon} />
            </div>
          ))}

        </div>)
      }

    </div>
  );
}