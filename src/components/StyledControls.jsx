import React from 'react';
import styled from 'styled-components';

// Approach 2: Styled Components
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  background-color: #ffffff;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.$active ? '#2563eb' : '#f1f5f9')};
  color: ${(props) => (props.$active ? '#ffffff' : '#475569')};
  border: ${(props) => (props.$active ? '1px solid #1d4ed8' : '1px solid #cbd5e1')};
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$active ? '#1d4ed8' : '#e2e8f0')};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ControlLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
`;

export const StyledControls = ({ showOnlyIncomplete, setShowOnlyIncomplete, totalCount, pendingCount }) => {
  return (
    <ControlsContainer>
      <ControlLabel>Filter View:</ControlLabel>
      <ButtonGroup>
        <FilterButton
          $active={!showOnlyIncomplete}
          onClick={() => setShowOnlyIncomplete(false)}
        >
          All Tasks ({totalCount})
        </FilterButton>
        <FilterButton
          $active={showOnlyIncomplete}
          onClick={() => setShowOnlyIncomplete(true)}
        >
          Pending Only ({pendingCount})
        </FilterButton>
      </ButtonGroup>
    </ControlsContainer>
  );
};
