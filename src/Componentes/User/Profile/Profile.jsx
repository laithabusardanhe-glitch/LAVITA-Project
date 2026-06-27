import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Typography } from "@mui/material";

function Profile(){
    const {currentUser} = useContext(UserContext);
return(<>
   <Typography>welcome, {currentUser.name}</Typography>

</>)

}
export default Profile;