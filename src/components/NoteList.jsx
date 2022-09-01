/* eslint-disable react/destructuring-assignment */
import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onArchive, onDelete }) {
  return (
    <ul className="note-list">
      {
        (notes.length > 0)
          ? notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))
          : <p className="note-list--empty">No notes to display</p>
      }
    </ul>
  );
}
