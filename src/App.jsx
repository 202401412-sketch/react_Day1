import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then((res) => res.json())
      .then((data) => {
        const formattedTasks = data.map((item) => ({
          id: item.id,
          title: item.title,
          category: item.id % 2 === 0 ? 'Development' : 'Design',
          isCompleted: item.completed,
          priority: item.id % 3 === 0 ? 'High' : 'Medium',
        }));
        setTasks(formattedTasks);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
        setLoading(false);
      });
  }, []);

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const totalCount = tasks.length;
  const pendingCount = tasks.filter((t) => !t.isCompleted).length;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f4f6f8',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Header
          title="Project Task Tracker"
          totalCount={totalCount}
          pendingCount={pendingCount}
        />

        <main>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
              style={{
                backgroundColor: '#2563eb',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {showOnlyIncomplete ? 'Show All Tasks' : 'Show Pending Only'}
            </button>
          </div>

          {loading ? (
            <p style={{ color: '#666', textAlign: 'center' }}>⏳ Loading tasks from API...</p>
          ) : (
            <TaskList
              tasks={tasks}
              onToggleStatus={handleToggleTask}
              showOnlyIncomplete={showOnlyIncomplete}
            />
          )}
        </main>
      </div>
    </div>
  );
}