import { Container, Typography, Button, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mt={10}>
        <Typography variant="h3" fontWeight="bold">
          SmartKartAI
        </Typography>

        <Typography variant="h6" mt={2}>
          Shop Smarter with AI 🤖
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ mt: 4 }}
        >
          Ask AI What To Buy
        </Button>
      </Box>
    </Container>
  );
}

export default App;
