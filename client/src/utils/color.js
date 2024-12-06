export const getRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return `#${randomColor.padStart(6, "0")}`;
};