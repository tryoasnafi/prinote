import React from 'react';

export default function NoteSearch({ onSearchNotes }) {
  return (
    <div className="form-group search">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input type="text" placeholder="Search Notes..." onChange={onSearchNotes} />
    </div>
  );
}
