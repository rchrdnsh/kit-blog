export const capitalize = (word) => {
  const lower = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lower.slice(1)
};