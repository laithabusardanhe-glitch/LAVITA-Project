import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    
    document.body.style.backgroundColor = theme === "dark" ? "#4f4554" : "white";
    document.body.style.color = theme === "light" ? "black" : "white";

 
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.backgroundColor = theme === "dark" ? "#333399" : "#0d75f8";
    }

    
    const footer = document.getElementById("footer");
    if (footer) {
      footer.style.backgroundColor = theme === "dark" ? "#4f4554" : "white";
      footer.style.color = theme === "light" ? "black" : "white";
    }


    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Button variant="contained" color="warning" onClick={handleChange}>
        {theme === "dark" ? "light" : "dark"}
      </Button>
    </>
  );
}

export default Theme;
