import { useState, ChangeEvent, FormEvent } from "react";

import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { Task, Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([{ name: 'Teste', status: true }]);
  const [newTask, setNewTask] = useState('');

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const addTask = (e: FormEvent) => {
    e.preventDefault()
    if (!newTask) {
      return alert(`Insira uma tarefa válida!`)
    }
    const alreadyTaskExits = tasks.find(task => task.name === newTask)
    if (alreadyTaskExits) {
      return alert(`A tarefa ${alreadyTaskExits.name} já existe na lista!`)
    }
    setTasks([...tasks, { name: newTask, status: false }])
    setNewTask("")
  }

  const changeTaskStatus = (taskToChange: Task, e: ChangeEvent<HTMLInputElement>) => {
    const task = tasks.find(task => task.name === taskToChange.name)

    if (task) {
      task.status = e.target.checked
      setTasks([...tasks])
    }
  }

  const removeTask = (taskToRemove: Task) => {
    setTasks(prevTasks => prevTasks.filter(task => task.name !== taskToRemove.name))
  }

  return (
    <div className="App">
      <Header />
      <NewTask newTask={newTask} handleChange={changeText} handleAddTask={addTask} />
      <Tasks tasks={tasks} handleChangeStatus={changeTaskStatus} handleRemoveTask={removeTask} />
    </div>
  )
}
