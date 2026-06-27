import { useContext } from "react";
import { UserContext } from "../Context/UserContext.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { users, setUsers, currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const register = (userData) => {
    if (
      !userData.email ||
      !userData.name ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const isExist = users.find((u) => u.email === userData.email);

    if (isExist) {
      toast.error("Email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: "user",
    };

    
    setUsers([...users, newUser]);

    
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast.success("Registered successfully");
     
  };

  const login = (userData) => {
  try {
    if (!userData.email || !userData.password) {
      toast.error("Please fill fields");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = allUsers.find(
      (user) => user.email === userData.email
    );

    if (!isExist) {
      toast.error("Email does not exist");
      return;
    }

    if (isExist.password !== userData.password) {
      toast.error("Password incorrect");
      return;
    }

    setCurrentUser(isExist);
    localStorage.setItem("currentUser", JSON.stringify(isExist));

    toast.success("Login successfully");

    if (isExist.role === "user") navigate("/home");
    if (isExist.role === "admin") navigate("/admin/dashboard");

  } catch (err) {
    console.log(err);
  }
};
 const logout = () => {

  localStorage.removeItem("currentUser");
  setCurrentUser(null); 
  navigate("/menu");
};


  return { register, login, logout, currentUser };
};
