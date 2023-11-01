import React, { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

export default function useMessageContext() {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useMessageContext must be used in MessageContextProvider");
  }
  return context;
}
