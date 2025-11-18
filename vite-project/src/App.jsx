import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar matemática",
      description: "Resolver exercícios e revisar a teoria.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar inglês",
      description: "Praticar conversação e fazer lições.",
      isCompleted: false,
    },
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      } 

      else {
        return task
      }
    })
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center p-3">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  )
}

export default App 