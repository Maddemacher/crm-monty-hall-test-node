import { getGame } from './game';

export const simulate = ({ changing, doors }) => {
  const { selectedDoor, prize } = getGame({ doors });

  if (changing) {
    return selectedDoor !== prize;
  }

  return selectedDoor === prize;
};
