import React from 'react';
import autoBind from 'auto-bind';

import { getInitialData } from './utils/index';
import './styles/style.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      activeTabIndex: 0,
      search: '',
      showModal: false,
    };

    autoBind(this);
  }

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index,
    });
  }

  handleAddNote({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.setState((prevState) => ({
      notes: [newNote, ...prevState.notes],
    }));

    this.handleCloseModal();
    this.handleTabClick(0);
  }

  handleArchive(id) {
    this.setState((prevState) => {
      const newNotes = prevState.notes
        .map((note) => ((note.id === id) ? { ...note, archived: !note.archived } : note));

      return {
        notes: newNotes
      };
    });
  }

  handleDelete(id) {
    this.setState((prevState) => {
      const { notes } = prevState;
      const filteredNotes = notes.filter((note) => note.id !== id);
      return {
        notes: filteredNotes,
      };
    });
  }

  handleSearchNotesEvent(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.setState({ search: searchTerm });
  }

  handleShowFormEvent(event) {
    event.preventDefault();
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      notes, activeTabIndex, search, showModal
    } = this.state;

    return (
      <div className="App">
        <Sidebar activeTabIndex={activeTabIndex} onTabClick={this.handleTabClick} />
        <MainContent
          notes={notes}
          activeTabIndex={activeTabIndex}
          onArchive={this.handleArchive}
          onDelete={this.handleDelete}
          onSearchNotes={this.handleSearchNotesEvent}
          search={search}
          showAddNoteForm={this.handleShowFormEvent}
          onAddNote={this.handleAddNote}
          showModal={showModal}
          onCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
