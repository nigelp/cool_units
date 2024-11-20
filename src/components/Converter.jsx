import { useState, useEffect } from 'react'
import { Paper, TextField, MenuItem, Grid, IconButton } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

function Converter({ category }) {
  const [fromUnit, setFromUnit] = useState(category.units[0])
  const [toUnit, setToUnit] = useState(category.units[1])
  const [fromValue, setFromValue] = useState('1')
  const [toValue, setToValue] = useState('')

  useEffect(() => {
    setFromUnit(category.units[0])
    setToUnit(category.units[1])
  }, [category])

  useEffect(() => {
    if (fromValue === '') {
      setToValue('')
      return
    }
    const value = parseFloat(fromValue)
    if (isNaN(value)) {
      setToValue('Invalid input')
      return
    }
    
    const baseValue = value * fromUnit.toBase
    const result = baseValue / toUnit.toBase
    setToValue(result.toFixed(6))
  }, [fromValue, fromUnit, toUnit])

  const handleSwap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setFromValue(toValue)
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={5}>
          <TextField
            select
            fullWidth
            label="From"
            value={fromUnit.symbol}
            onChange={(e) => setFromUnit(category.units.find(u => u.symbol === e.target.value))}
            sx={{ mb: 2 }}
          >
            {category.units.map((unit) => (
              <MenuItem key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Value"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={2} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 2, sm: 0 } }}>
          <IconButton onClick={handleSwap} color="primary" sx={{ transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' } }}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            select
            fullWidth
            label="To"
            value={toUnit.symbol}
            onChange={(e) => setToUnit(category.units.find(u => u.symbol === e.target.value))}
            sx={{ mb: 2 }}
          >
            {category.units.map((unit) => (
              <MenuItem key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Result"
            value={toValue}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Converter
