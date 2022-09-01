import React from 'react';

export default function TabButton({ innerText, activeTabIndex, onTabClick }) {
  return (
    <button type="button" className="nav-link" onClick={() => onTabClick(activeTabIndex)}>
      {innerText}
    </button>
  );
}
