import { Task } from "../components/TaskItem/TaskItem";

export type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "TOGGLE_COMPLETION"; payload: number };

export interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  toggleCompletion: (id: number) => void;
}