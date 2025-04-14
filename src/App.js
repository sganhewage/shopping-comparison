import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [selectedStores, setSelectedStores] = useState({
    amazon: true,
    walmart: true,
    target: true,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleStoreChange = (store) => {
    setSelectedStores({
      ...selectedStores,
      [store]: !selectedStores[store],
    });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Shopping Comparison
        </Typography>
        
        {/* Centered Search Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Paper elevation={3} sx={{ p: 3, width: '50%' }}>
            <form onSubmit={handleSearch}>
              <TextField
                fullWidth
                label="Search for products"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Button type="submit" variant="contained" color="primary">
                      <SearchIcon />
                    </Button>
                  ),
                }}
              />
            </form>
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Filters Sidebar */}
          <Box sx={{ width: '25%', flexShrink: 0 }}>
            <Paper elevation={3} sx={{ p: 2, position: 'sticky', top: 20 }}>
              <Typography variant="h6" gutterBottom>
                Filters
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle1" gutterBottom>
                Price Range
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="0-50">$0 - $50</MenuItem>
                  <MenuItem value="50-100">$50 - $100</MenuItem>
                  <MenuItem value="100-200">$100 - $200</MenuItem>
                  <MenuItem value="200+">$200+</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom>
                Sort By
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="price">Price: Low to High</MenuItem>
                  <MenuItem value="-price">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="reviews">Reviews</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom>
                Stores
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedStores.amazon}
                      onChange={() => handleStoreChange('amazon')}
                    />
                  }
                  label="Amazon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedStores.walmart}
                      onChange={() => handleStoreChange('walmart')}
                    />
                  }
                  label="Walmart"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedStores.target}
                      onChange={() => handleStoreChange('target')}
                    />
                  }
                  label="Target"
                />
              </FormGroup>
            </Paper>
          </Box>

          {/* Product Grid */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={`https://picsum.photos/200/200?random=${item}`}
                      alt="Product"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Sample Product {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        $99.99
                      </Typography>
                      <Rating value={4} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        Amazon, Walmart, Target
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
