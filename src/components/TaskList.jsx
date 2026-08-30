import React from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, onToggleStatus, showOnlyIncomplete }) => {
  const filteredTasks = showOnlyIncomplete 
    ? tasks.filter(task => !task.isCompleted) 
    : tasks;

  return (
    <section>
      {filteredTasks.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>No tasks found in this view.</p>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px 0'
      }}>
        {filteredTasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onToggleStatus={onToggleStatus} 
          />
        ))}
      </div>
    </section>
  );
};