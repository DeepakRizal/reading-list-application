import React, { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/books";

const BookList = () => {
  const { books } = useContext(BookContext);

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
