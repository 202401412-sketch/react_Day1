import React from 'react';

// Approach 1: Inline Styling Objects
const headerContainerStyle = {
  backgroundColor: '#0f172a',
  color: '#ffffff',
  padding: '24px 32px',
  borderRadius: '16px',
  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.25)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '28px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

const titleStyle = {
  margin: 0,
  fontSize: '28px',
  fontWeight: 700,
  letterSpacing: '-0.5px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const subtitleStyle = {
  fontSize: '14px',
  color: '#94a3b8',
  marginTop: '4px',
  marginBottom: 0,
};

const badgeBoxStyle = {
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  padding: '10px 20px',
  borderRadius: '50px',
  fontSize: '14px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const completeTextStyle = {
  color: '#4ade80',
  fontWeight: 700,
};

const pendingTextStyle = {
  color: '#f87171',
  fontWeight: 700,
};

export const Header = ({ title = 'Project Task Tracker', totalCount = 0, pendingCount = 0 }) => {
  return (
    <header style={headerContainerStyle} className="shadow-sm">
      <div>
        <h1 style={titleStyle}>
          <span>📋</span> {title}
        </h1>
        <p style={subtitleStyle}>Manage, filter, and track project tasks efficiently</p>
      </div>

      <div style={badgeBoxStyle}>
        {pendingCount === 0 ? (
          <span style={completeTextStyle}>🎉 All tasks completed!</span>
        ) : (
          <span>
            <span style={pendingTextStyle}>{pendingCount}</span> of {totalCount} remaining
          </span>
        )}
      </div>
    </header>
  );
};