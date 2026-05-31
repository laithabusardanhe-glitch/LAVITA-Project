import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import erosImg from "../../src/assets/eros.jpg";
import oneMillionImg from "../../src/assets/oneMillion.jpg";
import intenselyImg from "../../src/assets/intensely.jpg";
import spicebombImg from "../../src/assets/spicebomb.jpg";
import gucciImg from "../../src/assets/gucci.jpg";
import bossImg from "../../src/assets/boss.jpg";
import sovageImg from "../../src/assets/sovage.jpg";
import blueImg from "../../src/assets/blue.jpg";
import acquaImg from "../../src/assets/acqua.jpg";

function PerfumeCards() {
  return (
    <Container sx={{
      display:'grid',
      gridTemplateColumns:'repeat(3, 1fr)',
      gap:2,
      padding:"50px"
    }}>
      <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/sauvage">
      <CardMedia component="img" height="100%" image={sovageImg} alt="Sauvage" />
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
      <CardMedia component="img" height="100%" image={blueImg} alt="Bleu de Chanel" />
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
      <CardMedia component="img" height="100%" image={acquaImg} alt="Acqua di Giò" />
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

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/eros">
      <CardMedia component="img" height="100%" image={erosImg} alt="Versace Eros" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Versace Eros - $90
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Versace Eros is a fresh and powerful fragrance with notes of mint, green apple, and tonka bean. 
          It is perfect for parties, romantic dates, and night outings. 
          Best seasons to wear it are fall, winter, and cool summer evenings.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/spicebomb">
      <CardMedia component="img" height="100%" image={spicebombImg} alt="Spicebomb" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Viktor & Rolf Spicebomb - $115
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Viktor & Rolf Spicebomb is an explosive spicy fragrance with notes of cinnamon, pink pepper, and tobacco. 
          Strong and masculine, perfect for evening wear and special occasions. 
          Best seasons to wear it are fall and winter.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/onemillion">
      <CardMedia component="img" height="100%" image={oneMillionImg} alt="One Million" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paco Rabanne One Million - $85
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Paco Rabanne One Million is a sweet, spicy, and luxurious fragrance with leather and amber notes. 
          Bold and attention-grabbing, ideal for parties and night outings. 
          Works best during fall and winter seasons.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/intensely">
      <CardMedia component="img" height="100%" image={intenselyImg} alt="You Intensely" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          You Intensely - $120
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          You Intensely is a captivating fragrance with fruity and smoky accords, balanced by warm woods. 
          Designed for confident men who want to stand out. 
          Best worn during fall and winter, especially for formal occasions.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/gucci">
      <CardMedia component="img" height="100%" image={gucciImg} alt="Gucci Guilty" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gucci Guilty - $100
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Gucci Guilty is a modern and bold fragrance with citrus, lavender, and patchouli notes. 
          Great for daily wear, casual outings, and evening events. 
          Works best during spring and fall seasons.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} to="/perfume/boss">
      <CardMedia component="img" height="100%" image={bossImg} alt="Hugo Boss Bottled" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hugo Boss Bottled - $120
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hugo Boss Bottled is a timeless fragrance with notes of apple, cinnamon, and sandalwood. 
          Balanced and versatile, perfect for office wear and casual outings. 
          Best seasons to wear it are spring and fall.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

    </Container>
  );
}

export default PerfumeCards;
