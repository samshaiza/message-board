import React, { createContext, useReducer } from "react";

export const MessageContext = createContext();

export const messageReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        messages: action.payload,
      };
    case "CREATE_MESSAGE":
      return {
        messages: [action.payload, ...state.messages],
      };
    case "DELETE_MESSAGE":
      return {
        messages: state.messages.filter((m) => m._id !== action.payload._id),
      };
  }
};

export default function MessageContextProvider({ children }) {
  const [state, dispatch] = useReducer(messageReducer, {
    messages: null,
  });
  return (
    <div>
      <MessageContext.Provider value={{ ...state, dispatch }}>
        {children}
      </MessageContext.Provider>
    </div>
  );
}
