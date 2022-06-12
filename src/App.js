import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";

function BooksApp() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              href="#href"
              className="close-search"
              onClick={() => setShowSearchPage({ showSearchPage: false })}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <Header />
          <Contents />
          <div className="open-search">
            <a
              href="#href"
              onClick={() => setShowSearchPage({ showSearchPage: true })}
            >
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksApp;
