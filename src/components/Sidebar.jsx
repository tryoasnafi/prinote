import React from 'react';
import TabButton from './buttons/TabButton';

export default function Sidebar({ activeTabIndex, onTabClick }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Notes App</h1>
      <ul className="navbar-nav">
        <li className={activeTabIndex === 0 ? 'nav-item active' : 'nav-item'}>
          <TabButton innerText="Personal Notes" activeTabIndex={0} onTabClick={onTabClick} />
        </li>
        <li className={activeTabIndex === 1 ? 'nav-item active' : 'nav-item'}>
          <TabButton innerText="Archived Notes" activeTabIndex={1} onTabClick={onTabClick} />
        </li>
      </ul>
    </nav>
  );
}
