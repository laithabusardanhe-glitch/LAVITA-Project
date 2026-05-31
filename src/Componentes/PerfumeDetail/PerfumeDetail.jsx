import { useParams, Link } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import sovageImg from "../../assets/sovage.jpg";
import blueImg from "../../assets/blue.jpg";
import acquaImg from "../../assets/acqua.jpg";
import erosImg from "../../assets/eros.jpg";
import spicebombImg from "../../assets/spicebomb.jpg";
import oneMillionImg from "../../assets/oneMillion.jpg";
import intenselyImg from "../../assets/intensely.jpg";
import gucciImg from "../../assets/gucci.jpg";
import bossImg from "../../assets/boss.jpg";
import Menu from "../../../Pages/Menu/Menu";
import PerfumeCards from "../../../Pages/PerfumeCards/PerfumeCards.jsx";
const perfumes = {
  sauvage: {
    name: "Dior Sauvage",
    price: "$110",
    image: sovageImg,
    description: "Dior Sauvage is a fresh and spicy fragrance with a strong and masculine scent. Perfect for daily use, night outings, and special occasions.",
    composition: ["Bergamot", "Pepper", "Lavender", "Sichuan Pepper", "Ambroxan", "Cedar"]
  },
  bleu: {
    name: "Bleu de Chanel",
    price: "$120",
    image: blueImg,
    description: "Bleu de Chanel is an elegant and clean fragrance with a smooth woody scent. Great for formal events, work, and classy occasions.",
    composition: ["Lemon", "Mint", "Ginger", "Nutmeg", "Sandalwood", "Cedar"]
  },
  acqua: {
    name: "Acqua di Giò",
    price: "$95",
    image: acquaImg,
    description: "Acqua di Giò is a light and refreshing fragrance inspired by the sea. Ideal for daytime, casual outings, and hot weather.",
    composition: ["Jasmine", "Lime", "Marine Notes", "Peach", "Cedar", "Musk"]
  },
  eros: {
    name: "Versace Eros",
    price: "$90",
    image: erosImg,
    description: "Versace Eros is a fresh and powerful fragrance with notes of mint, green apple, and tonka bean. Perfect for parties, romantic dates, and night outings.",
    composition: ["Mint", "Green Apple", "Tonka Bean", "Geranium", "Vanilla", "Cedarwood"]
  },
  spicebomb: {
    name: "Viktor & Rolf Spicebomb",
    price: "$115",
    image: spicebombImg,
    description: "Spicebomb is an explosive spicy fragrance with cinnamon, pink pepper, and tobacco. Strong and masculine, perfect for evening wear.",
    composition: ["Pink Pepper", "Bergamot", "Cinnamon", "Saffron", "Tobacco", "Vetiver"]
  },
  onemillion: {
    name: "Paco Rabanne One Million",
    price: "$85",
    image: oneMillionImg,
    description: "One Million is a sweet, spicy, and luxurious fragrance with leather and amber notes. Bold and attention-grabbing.",
    composition: ["Blood Mandarin", "Peppermint", "Rose", "Cinnamon", "Leather", "Amber"]
  },
  intensely: {
    name: "You Intensely",
    price: "$120",
    image: intenselyImg,
    description: "You Intensely is a captivating fragrance with fruity and smoky accords, balanced by warm woods. Designed for confident men.",
    composition: ["Cardamom", "Bergamot", "Lavender", "Sage", "Vetiver", "Amberwood"]
  },
  gucci: {
    name: "Gucci Guilty",
    price: "$100",
    image: gucciImg,
    description: "Gucci Guilty is a modern and bold fragrance with citrus, lavender, and patchouli notes. Great for daily wear and evening events.",
    composition: ["Lemon", "Lavender", "Orange Blossom", "Neroli", "Patchouli", "Cedar"]
  },
  boss: {
    name: "Hugo Boss Bottled",
    price: "$120",
    image: bossImg,
    description: "Boss Bottled is a timeless fragrance with notes of apple, cinnamon, and sandalwood. Balanced and versatile for office and casual wear.",
    composition: ["Apple", "Citrus", "Cinnamon", "Clove", "Sandalwood", "Cedarwood"]
  }
};

const colors = ["#e57373", "#f06292", "#ba68c8", "#64b5f6", "#4db6ac", "#81c784", "#ffd54f", "#ffb74d", "#a1887f", "#90a4ae"];

function PerfumeDetail() {
  const { id } = useParams();
  const perfume = perfumes[id];

  if (!perfume) return <Typography>Perfume not found</Typography>;

  return (
    <Container sx={{ padding: 5 }}>
      <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
        {/* صورة العطر */}
        <img src={perfume.image} alt={perfume.name} style={{ width: "300px", borderRadius: "10px" }} />

        {/* النصوص */}
        <Box>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {perfume.name} - {perfume.price}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            {perfume.description}
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: 2 }}>Composition</Typography>
          {perfume.composition.map((note, index) => (
            <Box key={index} sx={{
              backgroundColor: colors[index % colors.length],
              color: "#fff",
              padding: "8px",
              borderRadius: "6px",
              marginBottom: "6px",
              textAlign: "center",
              fontWeight: "bold"
            }}>
              {note}
            </Box>
          ))}

          
          <Button component={Link} to="/menu" variant="contained" color="primary" sx={{ marginTop: 3 }}>
            Back to Menu
          </Button>
        </Box>
      </Box>
           <Typography variant="h5" sx={{ marginBottom: 2, p:5 }}>Other Perfumes</Typography>
    <PerfumeCards/>
    </Container>

  );
}

export default PerfumeDetail;
