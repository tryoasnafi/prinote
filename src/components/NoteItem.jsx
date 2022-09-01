import React from 'react';
import { showFormattedDate } from '../utils/index';
import ArchiveButton from './buttons/ArchiveButton';
import DeleteButton from './buttons/DeleteButton';

export default function NoteItem({
  id, title, body, createdAt, archived, onArchive, onDelete
}) {
  return (
    <li className="note-item">
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__body">{body}</p>
      <div className="note-item__actions">
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </li>
  );
}
