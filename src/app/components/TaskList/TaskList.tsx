import React from "react";
import TaskItem, { Task } from "../TaskItem/TaskItem";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
