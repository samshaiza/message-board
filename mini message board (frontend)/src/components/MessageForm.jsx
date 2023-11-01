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
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>new message...</h3>
      <label></label>
      <input
        className=""
        onChange={(e) => {
          setUser(e.target.value);
        }}
        type="text"
        value={user}
      />
      <input
        className=""
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        value={text}
      />
      <button>Enter</button>
    </form>
  );
}
