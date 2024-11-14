import React, { useContext, useState } from "react";
import BookContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BookContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, title);
    onSubmit();
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
