export default function divideFunction(numerator, denominator) {
  if (denominator == 0) {
    throw new Error("cannot divide by 0");
  }

  return numerator / denominator;
}
try {
  divideFunction()
} catch (e) {
  console.error(e.message);
}
