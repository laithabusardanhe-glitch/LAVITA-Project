import { createContext, useState, useEffect } from "react";

export const MessageContext = createContext();

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

 
  useEffect(() => {
    const stored = localStorage.getItem("messages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}
