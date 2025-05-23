import React from 'react';

function ThemeToggleButton({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? '  🌙  ' : '  ☀️  '}
    </button>
  );
}

export default ThemeToggleButton;