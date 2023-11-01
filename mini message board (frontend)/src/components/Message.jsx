import React from "react";
import useMessageContext from "../hook/useMessageContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Message({ message }) {
  const { dispatch } = useMessageContext();

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{message.user}</h4>
        <p className="card-text">{message.text}</p>
        <p className="card-text">
          {formatDistanceToNow(new Date(message.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}
