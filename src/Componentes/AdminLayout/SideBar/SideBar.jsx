import { useContext } from "react"
import { UserContext } from "../../../Context/UserContext.jsx"
import { Container, List, ListItemButton, Typography, Box } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import {useAuth} from "../../../Hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
export default function SideBar({isOpen , toggleSidebar}){
    const {currentUser} = useContext(UserContext);
    const {logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
    }
return(<>
<Box sx={{
    width: isOpen ? "250px" : "50px",
    minHeight: "100vh",
    borderRadius:3,
    bgcolor:"bisque",
    p:isOpen ? 3 : 1,
    m:1
}}>
<Typography variant="h6">{isOpen ? `welcome: ${currentUser?.name}` : currentUser?.name}</Typography>


<List>
    
<ListItemButton onClick={toggleSidebar}>
    <MenuIcon/>
</ListItemButton>
<ListItemButton onClick={() => navigate('/admin/dashboard')}>{isOpen ? "dashboard" :< DashboardIcon/> }</ListItemButton>
<ListItemButton onClick={() => navigate('/admin/profile')}>{isOpen ? "profile" :<PermIdentityIcon/>}</ListItemButton>
<ListItemButton onClick={() => navigate('/admin/dashboard/manage/users')} > {isOpen ? "manage users" : <ManageAccountsIcon/>}</ListItemButton>
<ListItemButton onClick={() => navigate('/admin/dashboard/manage/menu')}> {isOpen ? "manage menu" : <MenuOpenIcon/>}</ListItemButton>
<ListItemButton onClick={() => navigate('/massege')}> {isOpen ? "messages" : <MessageIcon/>}</ListItemButton>
<ListItemButton onClick={handleLogout}> {isOpen ? "logout" : <LogoutIcon/>}</ListItemButton>



</List>

</Box>
</>)



}