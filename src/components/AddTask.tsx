import { useState } from "react";
import Input from "./Input.tsx";

interface AddTaskProps {
  onAddTaskSubmit: (title: string, description: string) => void;
  onError: (message: string) => void;
}

function AddTask({ onAddTaskSubmit, onError }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function validInput({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    if (!title.trim() || !description.trim()) {
      onError("Preencha os campos titulo e descrição");
      return false;
    }
    return true;
  }

  function clearInput() {
    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite um titulo para tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!validInput({ title, description })) return;
          onAddTaskSubmit(title, description);
          clearInput();
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
