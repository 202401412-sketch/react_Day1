import { useState, useEffect } from 'react';
import { initialTasks } from '../data/tasksData';

const LOCAL_STORAGE_KEY = 'project_tracker_tasks';

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
    }
    return initialTasks;
  });

  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [tasks]);

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const totalCount = tasks.length;
  const pendingCount = tasks.filter((task) => !task.isCompleted).length;

  return {
    tasks,
    showOnlyIncomplete,
    setShowOnlyIncomplete,
    handleToggleTask,
    pendingCount,
    totalCount,
  };
}
