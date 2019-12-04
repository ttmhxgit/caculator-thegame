export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() *  (max - min)) + min;
}

export const pickArrayRandomly = (array) => {
  return array[randomInt(0, array.length - 1)];
}