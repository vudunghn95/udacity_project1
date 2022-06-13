import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  const { shelfTitle, books, onUpdate } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((x) => {
            return (
              <Book
                key={x.id}
                image={x.imageLinks}
                title={x.title}
                authors={x.authors}
                onUpdate={onUpdate}
                bookId={x.id}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
