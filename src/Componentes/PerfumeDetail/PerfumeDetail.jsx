import { useParams, Link } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { useEffect } from "react";
import sovageImg from "../../assets/sovage.jpg";
import blueImg from "../../assets/blue.jpg";
import acquaImg from "../../assets/acqua.jpg";
import erosImg from "../../assets/eros.jpg";
import spicebombImg from "../../assets/spicebomb.jpg";
import oneMillionImg from "../../assets/oneMillion.jpg";
import intenselyImg from "../../assets/intensely.jpg";
import gucciImg from "../../assets/gucci.jpg";
import bossImg from "../../assets/boss.jpg";


const perfumes = {
  sauvage: {
    name: "Dior Sauvage",
    price: 110,
    image: sovageImg,
    description: "Dior Sauvage is a fresh and spicy fragrance with a strong and masculine scent. It is perfect for daily use, night outings, and special occasions. The best seasons to wear it are spring, fall, and cool summer nights.",
    composition: ["Bergamot", "Pepper", "Lavender", "Ambroxan", "Cedar"]
  },
  bleu: {
    name: "Bleu de Chanel",
    price: 120,
    image: blueImg,
    description: "Bleu de Chanel is an elegant and clean fragrance with a smooth woody scent. It is great for formal events, work, and classy occasions. It works best during spring, fall, and winter.",
    composition: ["Lemon", "Mint", "Ginger", "Nutmeg", "Sandalwood"]
  },
  acqua: {
    name: "Acqua di Giò",
    price: 95,
    image: acquaImg,
    description: "Acqua di Giò is a light and refreshing fragrance inspired by the sea. It is ideal for daytime, casual outings, and hot weather. The best time to wear it is during summer and warm spring days.",
    composition: ["Jasmine", "Marine Notes", "Peach", "Cedar", "Musk"]
  },
  eros: {
    name: "Versace Eros",
    price: 90,
    image: erosImg,
    description: "Versace Eros is a fresh and powerful fragrance with notes of mint, green apple, and tonka bean. It is perfect for parties, romantic dates, and night outings. Best seasons to wear it are fall, winter, and cool summer evenings.",
    composition: ["Mint", "Green Apple", "Tonka Bean", "Vanilla", "Cedarwood"]
  },
  spicebomb: {
    name: "Viktor & Rolf Spicebomb",
    price: 115,
    image: spicebombImg,
    description: "Viktor & Rolf Spicebomb is an explosive spicy fragrance with notes of cinnamon, pink pepper, and tobacco. Strong and masculine, perfect for evening wear and special occasions. Best seasons to wear it are fall and winter.",
    composition: ["Pink Pepper", "Bergamot", "Cinnamon", "Saffron", "Tobacco"]
  },
  onemillion: {
    name: "Paco Rabanne One Million",
    price: 85,
    image: oneMillionImg,
    description: "Paco Rabanne One Million is a sweet, spicy, and luxurious fragrance with leather and amber notes. Bold and attention-grabbing, ideal for parties and night outings. Works best during fall and winter seasons.",
    composition: ["Blood Mandarin", "Peppermint", "Rose", "Leather", "Amber"]
  },
  intensely: {
    name: "You Intensely",
    price: 120,
    image: intenselyImg,
    description: "You Intensely is a captivating fragrance with fruity and smoky accords, balanced by warm woods. Designed for confident men who want to stand out. Best worn during fall and winter, especially for formal occasions.",
    composition: ["Cardamom", "Lavender", "Sage", "Vetiver", "Amberwood"]
  },
  gucci: {
    name: "Gucci Guilty",
    price: 100,
    image: gucciImg,
    description: "Gucci Guilty is a modern and bold fragrance with citrus, lavender, and patchouli notes. Great for daily wear, casual outings, and evening events. Works best during spring and fall seasons.",
    composition: ["Lemon", "Lavender", "Orange Blossom", "Patchouli", "Cedar"]
  },
  boss: {
    name: "Hugo Boss Bottled",
    price: 120,
    image: bossImg,
    description: "Hugo Boss Bottled is a timeless fragrance with notes of apple, cinnamon, and sandalwood. Balanced and versatile, perfect for office wear and casual outings. Best seasons to wear it are spring and fall.",
    composition: ["Apple", "Citrus", "Cinnamon", "Sandalwood", "Cedarwood"]
  }
};

const colors = ["#e57373","#64b5f6","#4db6ac","#81c784","#ffd54f","#ffb74d","#a1887f","#90a4ae"];

function PerfumeDetail({ addToCart }) {
  const { id } = useParams();
  const perfume = perfumes[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!perfume) return <Typography variant="h6">Perfume not found</Typography>;


  const otherPerfumes = Object.entries(perfumes).filter(([key]) => key !== id);

  return (
    <Container sx={{ padding: 5 }}>
     
      <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
        <img src={perfume.image} alt={perfume.name} style={{ width: "300px", borderRadius: "10px" }} />

        <Box>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {perfume.name} - ${perfume.price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {perfume.description}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>Composition</Typography>
          {perfume.composition.map((note, index) => (
            <Box key={index} sx={{
              backgroundColor: colors[index % colors.length],
              color: "#fff",
              p: 1,
              borderRadius: "6px",
              mb: 1,
              textAlign: "center",
              fontWeight: "bold"
            }}>
              {note}
            </Box>
          ))}

          <Button 
            variant="contained" 
            color="success" 
            sx={{ mt: 3, mr: 2 }}
            onClick={() => addToCart(perfume)}
          >
            Buy
          </Button>

          <Button component={Link} to="/menu" variant="outlined" color="primary" sx={{ mt: 3 }}>
            Back to Menu
          </Button>
        </Box>
      </Box>

      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>Other Perfumes</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
        {otherPerfumes.map(([key, item]) => (
          <Box key={key} sx={{ border: "1px solid #ddd", borderRadius: "8px", p: 2 }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
            <Typography variant="h6" sx={{ mt: 1 }}>{item.name} - ${item.price}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
              {item.description}
            </Typography>
            <Button 
              component={Link} 
              to={`/perfume/${key}`} 
              variant="contained" 
              color="primary" 
              sx={{ mr: 1 }}
            >
              View Details
            </Button>
            <Button 
              variant="outlined" 
              color="success" 
              onClick={() => addToCart(item)}
            >
              Buy
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default PerfumeDetail;
