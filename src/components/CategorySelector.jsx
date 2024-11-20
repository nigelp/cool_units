import { Box, Chip, Paper } from '@mui/material'

function CategorySelector({ categories, selectedCategory, onCategoryChange }) {
  return (
    <Paper sx={{ p: 2, mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.name}
          onClick={() => onCategoryChange(category)}
          color={selectedCategory.id === category.id ? 'primary' : 'default'}
          variant={selectedCategory.id === category.id ? 'filled' : 'outlined'}
        />
      ))}
    </Paper>
  )
}

export default CategorySelector
