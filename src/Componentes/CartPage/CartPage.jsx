import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Navbar from "../Navbar/Navbar";

function CartPage({ cart, totalPrice, removeFromCart }) {
  if (cart.length === 0) {
    return (
      <Container sx={{ padding: "50px" }}>
        <Typography variant="h5">Your cart is empty</Typography>
      </Container>
    );
  }

  return (<>
  <Navbar/>
    <Container sx={{
      display:'grid',
      gridTemplateColumns:'repeat(3, 1fr)',
      gap:2,
      padding:"50px"
    }}>
      
      <Typography 
        variant="h4" 
        sx={{ gridColumn: "span 3", textAlign: "center", mb: 3 }}
      >
        Total: ${totalPrice}
      </Typography>

    
      {cart.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name} - ${item.price}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                {item.description}
              </Typography>
             
              <Button 
                variant="outlined" 
                color="error" 
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Container>
 </> );
}

export default CartPage;
