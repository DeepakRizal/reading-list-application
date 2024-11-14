import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/books";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBookById } = useContext(BookContext);

  const handleDelete = () => {
    handleDeleteBookById(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      <div>{content}</div>

      <div className="actions">
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookShow;
