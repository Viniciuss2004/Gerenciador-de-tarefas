import Tasks from "./components/Tasks.tsx";
import AddTask from "./components/AddTask.tsx";
import {useEffect, useState} from "react";
import {v4} from "uuid";
import type {Task} from "./types.ts";
import Title from "./components/Title.tsx";
import Toast from "./components/Toast.tsx";
import { useToast } from "./hooks/useToast.ts";

function App() {
  const [tasks, setTasks] = useState<Task[]>(
    () => JSON.parse(localStorage.getItem("tasks") ?? "[]"),
  );
  const { toast, showToast } = useToast();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    showToast("success", "Tarefa adicionada com sucesso!");
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      {toast && <Toast toast={toast} />}
      <div className="w-full max-w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask
          onAddTaskSubmit={onAddTaskSubmit}
          onError={(message) => showToast("error", message)}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
