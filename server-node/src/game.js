const getRandom = ({ min = 0, max }) => {
  if (typeof max === 'undefined') {
    throw Error('Unable to generate number without a max');
  }

  return Math.floor(Math.random() * (max - min)) + min;
};

export const getGame = ({ doors = 3 } = {}) => {
  const selectedDoor = getRandom({ max: doors });
  const prize = getRandom({ max: doors });

  return {
    selectedDoor,
    prize
  };
};
