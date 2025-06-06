import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import ThemeToggleButton from './ThemeToggleButton';
import SearchInput from './SearchInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
      theme: localStorage.getItem('theme') || 'light',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onSearchChangeHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
      localStorage.setItem('theme', this.state.theme);
    }
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Aplikasi Catatan Pribadi</h1>
          <ThemeToggleButton theme={this.state.theme} toggleTheme={this.toggleTheme} />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <SearchInput searchQuery={this.state.searchQuery} onSearchChange={this.onSearchChangeHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList 
            notes={this.state.notes.filter(note => !note.archived && note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))} 
            onDelete={this.onDeleteHandler} 
            onArchive={this.onArchiveHandler} 
          />
          <h2>Catatan Diarsipkan</h2>
          <NoteList 
            notes={this.state.notes.filter(note => note.archived && note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))} 
            onDelete={this.onDeleteHandler} 
            onArchive={this.onArchiveHandler} 
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;