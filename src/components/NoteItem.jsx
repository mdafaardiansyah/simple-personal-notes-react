import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default NoteItem;