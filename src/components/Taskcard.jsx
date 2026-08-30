import React from 'react';

export const TaskCard = ({ task, onToggleStatus }) => {
  const { id, title, category, isCompleted, priority } = task;

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
      borderLeft: isCompleted ? '6px solid #22c55e' : '6px solid #3b82f6',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '180px',
      opacity: isCompleted ? 0.65 : 1,
      boxSizing: 'border-box'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{
            fontSize: '13px',
            fontWeight: 'bold',
            padding: '4px 10px',
            borderRadius: '6px',
            background: priority === 'High' ? '#fee2e2' : '#ffedd5',
            color: priority === 'High' ? '#dc2626' : '#c2410c'
          }}>
            {priority} Priority
          </span>
          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '600' }}>{category}</span>
        </div>

        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '20px',
          lineHeight: '1.4',
          textDecoration: isCompleted ? 'line-through' : 'none'
        }}>
          {title}
        </h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <button 
          onClick={() => onToggleStatus(id)}
          style={{
            background: isCompleted ? '#f1f5f9' : '#2563eb',
            color: isCompleted ? '#475569' : '#ffffff',
            border: isCompleted ? '1px solid #cbd5e1' : 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px'
          }}
        >
          {isCompleted ? 'Mark Pending' : 'Mark Complete'}
        </button>

        {!isCompleted && priority === 'High' && (
          <span style={{ fontSize: '13px', color: '#dc2626', fontWeight: 'bold' }}>⚠️ Urgent</span>
        )}
      </div>
    </div>
  );
};