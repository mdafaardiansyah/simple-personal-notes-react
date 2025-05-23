import React from 'react';

function SearchInput({ searchQuery, onSearchChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchInput;