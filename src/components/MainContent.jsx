/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import NoteSearch from './NoteSearch';
import NoteList from './NoteList';
import AddButton from './buttons/AddButton';
import NoteInput from './NoteInput';
import Modal from './Modal';

export default function MainContent({
  notes,
  activeTabIndex,
  onSearchNotes,
  onArchive,
  onDelete,
  search,
  showAddNoteForm,
  onAddNote,
  showModal,
  onCloseModal,
}) {
  const unarchivedNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);
  const notesToDisplay = activeTabIndex === 0 ? unarchivedNotes : archivedNotes;

  const filteredNotes = (search.length > 0 && notesToDisplay.length > 0)
    ? notesToDisplay.filter((note) => note.title.toLowerCase().includes(search))
    : notesToDisplay;

  return (
    <main className="main">
      <NoteSearch onSearchNotes={onSearchNotes} />
      <NoteList notes={filteredNotes} onArchive={onArchive} onDelete={onDelete} />
      <AddButton showAddNoteForm={showAddNoteForm} />
      <Modal title="New Note" showModal={showModal} onCloseModal={onCloseModal}>
        <NoteInput onAddNote={onAddNote} />
      </Modal>
    </main>
  );
}
