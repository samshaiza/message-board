import React from "react";
import useMessageContext from "../hook/useMessageContext";

export default function Message({ message }) {
  const { dispatch } = useMessageContext();

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{message.user}</h4>
        <p className="card-text">{message.text}</p>
      </div>
    </div>
  );
}
