"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Task } from "../components/TaskItem/TaskItem";
import { TaskAction, TaskContextProps } from "./task.types";

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_COMPLETION":
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export const TaskProvider = ({
  children,
  initialTasks,
}: {
  children: ReactNode;
  initialTasks: Task[];
}) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task: Task) => dispatch({ type: "ADD_TASK", payload: task });
  const removeTask = (id: number) => dispatch({ type: "REMOVE_TASK", payload: id });
  const toggleCompletion = (id: number) => dispatch({ type: "TOGGLE_COMPLETION", payload: id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
