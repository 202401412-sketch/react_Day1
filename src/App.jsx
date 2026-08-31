import React from 'react';
import { useTasks } from './hooks/useTasks';
import { Header } from './components/Header';
import { StyledControls } from './components/StyledControls';
import { TaskList } from './components/TaskList';

export default function App() {
  const {
    tasks,
    showOnlyIncomplete,
    setShowOnlyIncomplete,
    handleToggleTask,
    pendingCount,
    totalCount,
  } = useTasks();

  return (
    <div className="app-wrapper">
      <div className="container">
        <Header
          title="Project Task Tracker"
          totalCount={totalCount}
          pendingCount={pendingCount}
        />

        <main>
          <StyledControls
            showOnlyIncomplete={showOnlyIncomplete}
            setShowOnlyIncomplete={setShowOnlyIncomplete}
            totalCount={totalCount}
            pendingCount={pendingCount}
          />

          <TaskList
            tasks={tasks}
            onToggleStatus={handleToggleTask}
            showOnlyIncomplete={showOnlyIncomplete}
          />
        </main>

        <footer className="app-footer">
          <p className="mb-0">
            Assignment 2: Project Task Tracker &bull; Built with React Hooks, Custom Hooks, Bootstrap, and 4 Styling Approaches
          </p>
        </footer>
      </div>
    </div>
  );
}