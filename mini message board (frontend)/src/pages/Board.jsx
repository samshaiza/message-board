import React, { useEffect } from "react";
import useMessageContext from "../hook/useMessageContext";
import Message from "../components/Message";
import MessageForm from "../components/MessageForm";

export default function Board() {
  const { messages, dispatch } = useMessageContext();

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:3000/api/messages");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_MESSAGE", payload: json });
      }
    };
    fetchMessages();
  }, [dispatch]);

  return (
    <div>
      <div>
        {messages && messages.map((m) => <Message key={m._id} message={m} />)}
      </div>
      <div>
        <MessageForm />
      </div>
    </div>
  );
}
