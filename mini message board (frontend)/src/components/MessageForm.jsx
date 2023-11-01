import React from "react";
import { useState } from "react";
import useMessageContext from "../hook/useMessageContext";

export default function MessageForm() {
  const { dispatch } = useMessageContext();
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = { user, text };

    const response = await fetch("http://localhost:3000/api/messages", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUser("");
      setText("");
      setError(null);
      dispatch({ type: "CREATE_MESSAGE", payload: json });
    }
  };
  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} className="input-group ">
        <label></label>
        <input
          className="form-control"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          placeholder="username..."
          value={user}
        />
        <input
          className="form-control"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="new message..."
          type="text"
          value={text}
        />
        <button className="btn">Enter</button>
      </form>
    </div>
  );
}
