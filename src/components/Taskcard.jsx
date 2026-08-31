import React from 'react';
import styles from './TaskCard.module.css';

// Approach 3: CSS Modules combined with Bootstrap Card and Utility Classes
export const TaskCard = ({ task, onToggleStatus }) => {
  const { id, title, category, isCompleted, priority } = task;

  // Determine priority CSS Module class based on priority level
  const priorityClass =
    priority === 'High'
      ? styles.priorityHigh
      : priority === 'Medium'
      ? styles.priorityMedium
      : styles.priorityLow;

  const cardBorderClass = isCompleted ? styles.completedCard : styles.pendingCard;

  return (
    <div className={`card shadow-sm h-100 ${styles.card} ${cardBorderClass}`}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className={priorityClass}>{priority} Priority</span>
            <span className={styles.categoryTag}>{category}</span>
          </div>

          <h3 className={`${styles.taskTitle} ${isCompleted ? styles.completedTitle : ''}`}>
            {title}
          </h3>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
          <button
            onClick={() => onToggleStatus(id)}
            className={`btn btn-sm ${isCompleted ? 'btn-outline-secondary' : 'btn-primary'}`}
          >
            {isCompleted ? '✓ Mark Pending' : 'Mark Complete'}
          </button>

          {!isCompleted && priority === 'High' && (
            <span className={styles.urgentBadge}>⚠️ Urgent</span>
          )}
        </div>
      </div>
    </div>
  );
};
