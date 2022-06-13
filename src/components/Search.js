import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function Search() {
  const [input, setInput] = useState('');
const [books, setBooks] = useState([])
  useEffect(() => {
    async function searchBook(){
      const result = await BooksAPI.search(input, 20);
      setBooks(result);
    }
    if (input) {
      searchBook();
    }else {
      setBooks([]);
    }
  }, [input])
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" />
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={input} onChange={(e)=> setInput(e.target.value)} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {books && books.length > 0 && books.map((x) => {
            return (
              <Book
                key={x.id}
                image={x.imageLinks}
                title={x.title}
                authors={x.authors}
                bookId={x.id}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Search;
