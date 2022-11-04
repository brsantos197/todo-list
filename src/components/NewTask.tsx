import { ChangeEvent, FormEvent } from 'react'
import { Plus } from "phosphor-react";
import styles from './NewTask.module.css'

interface NewTaskProps {
  newTask: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: (e: FormEvent) => void;
}

export const NewTask = ({ newTask, handleChange, handleAddTask }: NewTaskProps) => {
  return (
    <form onSubmit={handleAddTask} className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={handleChange} />
        <button ><span>Criar</span> <Plus weight="bold" size={16} className={styles.icon} /></button>
      </form>
  );
}