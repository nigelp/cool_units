import { useState } from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'
import CategorySelector from './components/CategorySelector'
import Converter from './components/Converter'
import { categories } from './data/units'
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      py: 4
    }}>
      <Container maxWidth="sm">
        <Box sx={{ 
          my: 4,
          '& > *': { mb: 3 }
        }}>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 4 }}>
            <ChangeCircleOutlinedIcon 
              sx={{ 
                fontSize: 40,
                background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                borderRadius: '50%',
                p: 1,
                color: 'white',
                boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
              }} 
            />
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1e293b, #334155)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cool Units
            </Typography>
          </Stack>
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <Converter category={selectedCategory} />
        </Box>
      </Container>
    </Box>
  )
}

export default App
