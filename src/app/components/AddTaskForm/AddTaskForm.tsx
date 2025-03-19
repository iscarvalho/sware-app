import { useTasks } from "@/app/context/task.context";
import { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!taskDescription || taskDescription.length <= 3) return;
    const task = {
      id: Math.floor(Math.random() * 1000),
      title: taskDescription,
      completed: false,
    };
    addTask(task);
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={"add-task-form"}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" aria-label="Add Task">+</button>
    </form>
  );
};

export default AddTaskForm;
