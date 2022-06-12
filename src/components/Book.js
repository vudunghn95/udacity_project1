import React from "react";
import Options from "./Options";

function Book(props) {
  const { image, title, authors } = props;
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
          <Options />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;
