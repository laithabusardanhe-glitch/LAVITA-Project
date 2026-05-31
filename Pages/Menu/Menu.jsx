
import Typography from '@mui/material/Typography';


import Navbar from "../../src/Componentes/Navbar/Navbar.jsx";

import PerfumeCards from '../PerfumeCards/PerfumeCards.jsx';
function Menu(){
return(<>

<Navbar/>
<Typography sx={{
    padding:5
}}>THIS IS THE MENU PAGE</Typography>
<PerfumeCards/>




</>)



}
export default Menu;