export const categories = [
  {
    id: 'length',
    name: 'Length',
    units: [
      { name: 'Meter', symbol: 'm', toBase: 1 },
      { name: 'Kilometer', symbol: 'km', toBase: 1000 },
      { name: 'Centimeter', symbol: 'cm', toBase: 0.01 },
      { name: 'Millimeter', symbol: 'mm', toBase: 0.001 },
      { name: 'Mile', symbol: 'mi', toBase: 1609.344 },
      { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
      { name: 'Foot', symbol: 'ft', toBase: 0.3048 },
      { name: 'Inch', symbol: 'in', toBase: 0.0254 }
    ]
  },
  {
    id: 'mass',
    name: 'Mass',
    units: [
      { name: 'Kilogram', symbol: 'kg', toBase: 1 },
      { name: 'Gram', symbol: 'g', toBase: 0.001 },
      { name: 'Milligram', symbol: 'mg', toBase: 0.000001 },
      { name: 'Pound', symbol: 'lb', toBase: 0.45359237 },
      { name: 'Ounce', symbol: 'oz', toBase: 0.028349523125 },
      { name: 'Metric Ton', symbol: 't', toBase: 1000 }
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    units: [
      { name: 'Celsius', symbol: '°C', toBase: 1 },
      { name: 'Fahrenheit', symbol: '°F', toBase: 0.555556 },
      { name: 'Kelvin', symbol: 'K', toBase: 1 }
    ]
  },
  {
    id: 'time',
    name: 'Time',
    units: [
      { name: 'Second', symbol: 's', toBase: 1 },
      { name: 'Minute', symbol: 'min', toBase: 60 },
      { name: 'Hour', symbol: 'h', toBase: 3600 },
      { name: 'Day', symbol: 'd', toBase: 86400 },
      { name: 'Week', symbol: 'wk', toBase: 604800 },
      { name: 'Month', symbol: 'mo', toBase: 2592000 },
      { name: 'Year', symbol: 'yr', toBase: 31536000 }
    ]
  },
  {
    id: 'area',
    name: 'Area',
    units: [
      { name: 'Square Meter', symbol: 'm²', toBase: 1 },
      { name: 'Square Kilometer', symbol: 'km²', toBase: 1000000 },
      { name: 'Square Mile', symbol: 'mi²', toBase: 2589988.11 },
      { name: 'Hectare', symbol: 'ha', toBase: 10000 },
      { name: 'Acre', symbol: 'ac', toBase: 4046.86 },
      { name: 'Square Foot', symbol: 'ft²', toBase: 0.092903 }
    ]
  },
  {
    id: 'volume',
    name: 'Volume',
    units: [
      { name: 'Cubic Meter', symbol: 'm³', toBase: 1 },
      { name: 'Liter', symbol: 'L', toBase: 0.001 },
      { name: 'Milliliter', symbol: 'mL', toBase: 0.000001 },
      { name: 'Gallon', symbol: 'gal', toBase: 0.003785412 },
      { name: 'Quart', symbol: 'qt', toBase: 0.000946353 },
      { name: 'Pint', symbol: 'pt', toBase: 0.000473176 }
    ]
  },
  {
    id: 'speed',
    name: 'Speed',
    units: [
      { name: 'Meters per Second', symbol: 'm/s', toBase: 1 },
      { name: 'Kilometers per Hour', symbol: 'km/h', toBase: 0.277778 },
      { name: 'Miles per Hour', symbol: 'mph', toBase: 0.44704 },
      { name: 'Knot', symbol: 'kn', toBase: 0.514444 }
    ]
  },
  {
    id: 'pressure',
    name: 'Pressure',
    units: [
      { name: 'Pascal', symbol: 'Pa', toBase: 1 },
      { name: 'Kilopascal', symbol: 'kPa', toBase: 1000 },
      { name: 'Bar', symbol: 'bar', toBase: 100000 },
      { name: 'PSI', symbol: 'psi', toBase: 6894.76 },
      { name: 'Atmosphere', symbol: 'atm', toBase: 101325 }
    ]
  },
  {
    id: 'energy',
    name: 'Energy',
    units: [
      { name: 'Joule', symbol: 'J', toBase: 1 },
      { name: 'Kilojoule', symbol: 'kJ', toBase: 1000 },
      { name: 'Calorie', symbol: 'cal', toBase: 4.184 },
      { name: 'Kilocalorie', symbol: 'kcal', toBase: 4184 },
      { name: 'Watt Hour', symbol: 'Wh', toBase: 3600 },
      { name: 'Kilowatt Hour', symbol: 'kWh', toBase: 3600000 }
    ]
  },
  {
    id: 'data',
    name: 'Digital Storage',
    units: [
      { name: 'Byte', symbol: 'B', toBase: 1 },
      { name: 'Kilobyte', symbol: 'KB', toBase: 1024 },
      { name: 'Megabyte', symbol: 'MB', toBase: 1048576 },
      { name: 'Gigabyte', symbol: 'GB', toBase: 1073741824 },
      { name: 'Terabyte', symbol: 'TB', toBase: 1099511627776 }
    ]
  },
  {
    id: 'angle',
    name: 'Angle',
    units: [
      { name: 'Degree', symbol: '°', toBase: 1 },
      { name: 'Radian', symbol: 'rad', toBase: 57.2958 },
      { name: 'Gradian', symbol: 'grad', toBase: 0.9 }
    ]
  },
  {
    id: 'frequency',
    name: 'Frequency',
    units: [
      { name: 'Hertz', symbol: 'Hz', toBase: 1 },
      { name: 'Kilohertz', symbol: 'kHz', toBase: 1000 },
      { name: 'Megahertz', symbol: 'MHz', toBase: 1000000 },
      { name: 'Gigahertz', symbol: 'GHz', toBase: 1000000000 }
    ]
  }
]
