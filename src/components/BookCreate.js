import React, { useContext, useState } from "react";
import BookContext from "../context/books";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Enter Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
