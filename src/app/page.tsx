"use client";
import "./page.css";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./context/task.context";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <div className={"container"}>
      <div className={"task-container"}>
        <h2>ToDo List</h2>
        <AddTaskForm />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
