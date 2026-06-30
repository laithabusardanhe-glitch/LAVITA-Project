import { createContext, useState, useEffect } from "react";

export const MessageContext = createContext();

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [approvedMessages, setApprovedMessages] = useState([]); 


  useEffect(() => {
    const stored = localStorage.getItem("messages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }

    const storedApproved = localStorage.getItem("approvedMessages");
    if (storedApproved) {
      setApprovedMessages(JSON.parse(storedApproved));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  
  useEffect(() => {
    localStorage.setItem("approvedMessages", JSON.stringify(approvedMessages));
  }, [approvedMessages]);

  return (
    <MessageContext.Provider value={{ messages, setMessages, approvedMessages, setApprovedMessages }}>
      {children}
    </MessageContext.Provider>
  );
}
