import React from 'react';
import { useTasks } from '../hooks/useTasks';
import { Header } from '../components/Header';
import { StyledControls } from '../components/StyledControls';
import { TaskList } from '../components/TaskList';
import { useTheme } from '../context/ThemeContext';

export function Home() {
  const {
    tasks,
    showOnlyIncomplete,
    setShowOnlyIncomplete,
    handleToggleTask,
    pendingCount,
    totalCount,
  } = useTasks();

  const { theme } = useTheme();

  return (
    <div className="home-page py-3">
      {/* Approach 1: Inline Styling in Header */}
      <Header
        title="Interactive Task Tracker"
        totalCount={totalCount}
        pendingCount={pendingCount}
      />

      {/* Approach 2: Styled Components in StyledControls */}
      <StyledControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        totalCount={totalCount}
        pendingCount={pendingCount}
      />

      {/* Approach 3: CSS Modules in TaskCard & Approach 4: Bootstrap Grid in TaskList */}
      <TaskList
        tasks={tasks}
        onToggleStatus={handleToggleTask}
        showOnlyIncomplete={showOnlyIncomplete}
      />
    </div>
  );
}
