import { useState } from "react";

export default function Newtask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handlechange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() !== "") {return}
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handlechange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-slate-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
