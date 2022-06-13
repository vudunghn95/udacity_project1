import React, {useState} from "react";

function Options(props) {
  const [value, setValue] = useState('')
  const { onUpdate, bookId} = props;
  return (
    <div className="book-shelf-changer">
      <select
        value={value}
        onChange={(e) => {
          setValue(value);
          onUpdate({
            shelf: e.target.value,
            id: bookId,
          });
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option hidden>Option 1</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default Options;
