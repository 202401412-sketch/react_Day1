import React from 'react';

export const Header = ({ title, totalCount, pendingCount }) => {
  return (
    <header style={{
      background: '#1e293b',
      color: '#fff',
      padding: '24px',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    }}>
      <h1 style={{ margin: 0, fontSize: '24px' }}>{title}</h1>
      <div style={{
        background: '#334155',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        {pendingCount === 0 ? (
          <span style={{ color: '#4ade80' }}>🎉 All tasks completed!</span>
        ) : (
          <span>{pendingCount} of {totalCount} remaining</span>
        )}
      </div>
    </header>
  );
};