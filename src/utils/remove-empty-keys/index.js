export function removeEmptyKeys(obj) {
  const updatedData = { ...obj };
  for (let key in updatedData) {
    if (!updatedData[key]) {
      delete updatedData[key];
    }
  }
  return updatedData;
}
