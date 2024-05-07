const createSizeValue = (value, base = 16) => {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string' && value.endsWith('%')) {
    const percentage = parseFloat(value) / 100;
    return base * percentage;
  } else if (typeof value === 'string' && value.endsWith('px')) {
    const pixels = parseFloat(value);
    return pixels;
  } else {
    return base; // Default value
  }
};

export default createSizeValue;
