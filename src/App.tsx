import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export function App() {

  return (
    <div className="App">
      <Header />
      <NewTask />
      <Tasks />
    </div>
  )
}
