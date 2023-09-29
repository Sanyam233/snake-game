export const randomNumber = (max: number) => {
  const random = Math.random() * max;
  return random - (random % 20);
};
