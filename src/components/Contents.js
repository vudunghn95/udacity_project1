import React, { useEffect, useState } from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "../BooksAPI";

function Contents() {
  const title1 = "Currently Reading";
  const title2 = "Want to Read";
  const title3 = "Read";

  const [currentBooks, setCurrentBooks] = useState([]);
  const [wantedBooks, setWantedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      const books = await BooksAPI.getAll();
      if (books.length) {
        setCurrentBooks(
          books.filter((book) => book.shelf === "currentlyReading")
        );
        setWantedBooks(books.filter((book) => book.shelf === "wantToRead"));
        setReadBooks(books.filter((book) => book.shelf === "read"));
      }
    }
    getAllBooks();
  }, []);

  return (
    <div className="list-books-content">
      <Bookshelf shelfTitle={title1} books={currentBooks} />
      <Bookshelf shelfTitle={title2} books={wantedBooks} />
      <Bookshelf shelfTitle={title3} books={readBooks} />
    </div>
  );
}

export default Contents;
