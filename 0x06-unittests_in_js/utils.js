const calculateNumber = (type, a, b) => {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  let x = 0;
  switch (type) {
    case 'SUM':
      x = roundedA + roundedB;
      break;
  }
  return x;
};

module.exports = { calculateNumber };

