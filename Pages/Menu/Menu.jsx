
import Typography from '@mui/material/Typography';


import Navbar from "../../src/Componentes/Navbar/Navbar.jsx";

import PerfumeCards from '../PerfumeCards/PerfumeCards.jsx';
function Menu(){
return(<>

<Navbar/>
<Typography variant='h4' sx={{
    padding:5
}}>
    Perfume Menu</Typography>
<PerfumeCards/>




</>)



}
export default Menu;