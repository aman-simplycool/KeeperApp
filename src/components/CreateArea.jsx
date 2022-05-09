import React, { useState } from "react";

function CreateArea(props) {
  const [text, settext] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    settext((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value
      };
    });
  }
  function submitnote(event) {
    props.onAdd(text);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={text.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={text.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
