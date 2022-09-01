import React from 'react';
import autoBind from 'auto-bind';

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.TITLE_MAX_LENGTH = 50;

    this.state = {
      title: '',
      body: '',
      titleRemainingChars: this.TITLE_MAX_LENGTH,
    };

    autoBind(this);
  }

  handleTitleChangeEvent = (event) => {
    const { value } = event.target;
    const remainingChars = this.TITLE_MAX_LENGTH - value.length;

    if (remainingChars >= 0) {
      this.setState({
        title: value,
        titleRemainingChars: remainingChars
      });
    }
  };

  handleBodyChangeEvent = (event) => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmitEvent = (event) => {
    event.preventDefault();
    if (this.isEmptyField()) return;

    const { title, body } = this.state;
    const { onAddNote } = this.props;
    onAddNote({ title, body });

    this.clearForm();
  };

  isEmptyField = () => {
    const { title, body } = this.state;
    return title.length <= 0 && body.length <= 0;
  };

  clearForm() {
    this.setState({
      title: '',
      body: '',
      titleRemainingChars: this.TITLE_MAX_LENGTH,
    });
  }

  render() {
    const { title, body, titleRemainingChars } = this.state;

    return (
      <form className="form-note" onSubmit={this.handleSubmitEvent}>
        <p className="form-note__title-chars">
          Remaining Chars: &nbsp;
          {titleRemainingChars}
        </p>
        <input
          type="text"
          className="form-control form-note__title"
          placeholder="Title"
          value={title}
          onChange={this.handleTitleChangeEvent}
        />
        <textarea
          className="form-control form-note__body"
          placeholder="Body"
          rows={5}
          value={body}
          onChange={this.handleBodyChangeEvent}
        />
        <button type="submit" className="form-note__submit">
          Submit
        </button>
      </form>
    );
  }
}
