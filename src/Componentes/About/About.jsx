import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container } from '@mui/material';
import sovageImg from "../../assets/sovage.jpg";
import blueImg from "../../assets/blue.jpg";
import acquaImg from "../../assets/acqua.jpg";
import { Link } from "react-router-dom";


function About(){
  return (
    <>
      <h1>WELCOME TO LAVITA</h1>
      <p style={{ marginTop: 20 }}>
        Discover a world of luxury fragrances crafted to leave a lasting impression.
        At Lavita, we bring you elegant perfumes that blend sophistication, freshness,
        and timeless beauty for every occasion.
      </p>

      <Container sx={{ display:'flex', gap:2, padding:"50px" }}>
        
        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/perfume/sauvage">
            <CardMedia
              component="img"
              height="100%"
              image={sovageImg}
              alt="Sauvage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sauvage - $110
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Dior Sauvage is a fresh and spicy fragrance with a strong and masculine scent. 
                It is perfect for daily use, night outings, and special occasions. 
                The best seasons to wear it are spring, fall, and cool summer nights.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

       
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/perfume/bleu">
            <CardMedia
              component="img"
              height="auto"
              image={blueImg}
              alt="Bleu de Chanel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bleu de Chanel - $120
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Bleu de Chanel is an elegant and clean fragrance with a smooth woody scent. 
                It is great for formal events, work, and classy occasions. 
                It works best during spring, fall, and winter.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/perfume/acqua">
            <CardMedia
              component="img"
              height="50%"
              image={acquaImg}
              alt="Acqua di Giò"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Acqua di Giò - $95
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Acqua di Giò is a light and refreshing fragrance inspired by the sea. 
                It is ideal for daytime, casual outings, and hot weather. 
                The best time to wear it is during summer and warm spring days.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </Container>
    </>
  )
}

export default About;
