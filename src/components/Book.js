import React, { useEffect, useState } from "react";
import Options from "./Options";
import * as BooksAPI from "../BooksAPI";

function Book(props) {
  const [shelfUpdate, setShelfUpdate] = useState({
    shelf: ''
  });

  const { image, title, authors, bookId, onUpdate } = props;

  useEffect(() => {
    const shelfList = ["wantToRead", "currentlyReading", "read", "none"];
    async function updateShelf(book, shelf) {
      await BooksAPI.update(book, shelf);
      if (onUpdate) {
        onUpdate();
      } 
    }
    if (shelfList.includes(shelfUpdate.shelf)) {
      updateShelf(shelfUpdate, shelfUpdate.shelf);
    }
  }, [shelfUpdate, onUpdate]);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image && image.smallThumbnail})`,
            }}
          ></div>
          <Options onUpdate={setShelfUpdate} bookId={bookId} shelfUpdate={shelfUpdate}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;
