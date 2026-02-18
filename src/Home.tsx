import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";


const Home: React.FC = () => {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #111, #1e1e1e)",
          color: "white",
          py: 12,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Shop Smart. Powered by AI.
          </Typography>

          <Typography variant="h6" sx={{ mb: 4 }}>
            Discover trending products curated intelligently.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="success" size="large">
              Shop Now
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Explore Trending
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* CATEGORIES */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          Shop by Categories
        </Typography>

        <Grid container spacing={4}>
          {["Electronics", "Fashion", "Home", "Beauty", "Fitness", "Kids"].map(
            (category, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 150,
                      backgroundColor: "#eee",
                      borderRadius: 2,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6">{category}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* TRENDING PRODUCTS */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          🔥 Trending Now
        </Typography>

        <Grid container spacing={4}>
          {[1, 2, 3, 4].map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{
                    height: 180,
                    backgroundColor: "#f5f5f5",
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Product Name</Typography>
                  <Typography color="success.main" fontWeight="bold" mt={1}>
                    ₹999
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* AI SECTION */}
      <Box
        sx={{
          backgroundColor: "#111",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🤖 Recommended For You
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Our AI suggests products based on smart insights.
          </Typography>

          <Button variant="contained" color="success">
            View Recommendations
          </Button>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={5}>
          Why Choose SmartKartAI?
        </Typography>

        <Grid container spacing={4}>
          {[
            "🚚 Fast Delivery",
            "🔐 Secure Payments",
            "📦 Easy Returns",
            "🤖 AI Smart Suggestions",
          ].map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h6">{feature}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "white",
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>© 2026 SmartKartAI. All rights reserved.</Typography>
      </Box>

    </Box>
  );
};

export default Home;
