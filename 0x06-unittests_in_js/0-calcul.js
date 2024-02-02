const calculateNumber = (a, b = 0) => {
  const aNum = Number(a);
  const bNum = Number(b);
  
  if (Number.isNaN(aNum) || Number.isNaN(bNum)) { throw TypeError('Parameters must be numbers'); }
  const sum = Math.round(aNum) + Math.round(bNum);
  return sum;
};

module.exports = calculateNumber;
