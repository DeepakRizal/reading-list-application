import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={handleChange} className="input" value={title} />
      <button className="button is-primary">save</button>
    </form>
  );
};

export default BookEdit;
