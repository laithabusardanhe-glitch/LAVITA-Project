import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
 const [users, setUsers] = useState(() => {
  return JSON.parse(localStorage.getItem("users")) || [];
});

const [currentUser, setCurrentUser] = useState(() => {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
});


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{ users, setUsers, currentUser, setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
}