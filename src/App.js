import React, { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/books";

const App = () => {
  const { fetchedBooks } = useContext(BookContext);

  useEffect(() => {
    fetchedBooks();
  }, [fetchedBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
