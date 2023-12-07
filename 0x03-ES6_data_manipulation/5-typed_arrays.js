export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);

    const int8Array = new Int8Array(buffer);

    if (position < 0 || position >= length) {
      throw new Error('Position outside range')
    }

    int8Array[position] = value;
    
    const dataView = new DataView(buffer);

    return dataView;
  } catch(error) {
    console.log(error.message);
    return null;
  }
}
