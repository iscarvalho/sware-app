import { useTasks } from "@/app/context/task.context";
import "./TaskItem.css";
import Checkbox from "../Checkbox/Checkbox";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem = ({ id, title, completed }: Task) => {
  const { removeTask, toggleCompletion } = useTasks();
  return (
    <li key={id}>
      <div className={`task-item ${completed ? "completed" : ""}`}>
        <Checkbox
          checked={completed}
          onChange={() => toggleCompletion(id)}
          label={title}
          aria-label={title}
          aria-checked={completed}
        />
        <button onClick={() => removeTask(id)} aria-label="Remove Task">❌</button>
      </div>
    </li>
  );
};

export default TaskItem;
