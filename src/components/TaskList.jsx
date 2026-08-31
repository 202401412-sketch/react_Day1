import React from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks = [], onToggleStatus, showOnlyIncomplete = false }) => {
  const filteredTasks = showOnlyIncomplete
    ? tasks.filter((task) => !task.isCompleted)
    : tasks;

  return (
    <section className="task-list-section">
      {/* Conditional Rendering for Empty State */}
      {filteredTasks.length === 0 && (
        <div className="alert alert-info text-center py-4 my-4 shadow-sm rounded-3">
          <h5 className="alert-heading mb-1">No tasks found!</h5>
          <p className="mb-0 text-muted">
            {showOnlyIncomplete
              ? 'Great job! You have completed all pending tasks.'
              : 'No tasks currently available.'}
          </p>
        </div>
      )}

      {/* Bootstrap Grid System for Responsive Cards */}
      <div className="row g-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="col-12 col-md-6 col-lg-4">
            <TaskCard task={task} onToggleStatus={onToggleStatus} />
          </div>
        ))}
      </div>
    </section>
  );
};