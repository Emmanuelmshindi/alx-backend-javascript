export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  const cleanArray = startString ? filteredValues.map(value => value.slice(startString.length)) : []
  const resultString = cleanArray.join('-');

  return resultString;
}
