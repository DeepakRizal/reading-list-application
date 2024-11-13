import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
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
