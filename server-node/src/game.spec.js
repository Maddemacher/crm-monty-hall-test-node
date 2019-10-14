import { getGame } from './game';

describe('game', () => {
  describe('#getGame', () => {
    it('should generate game', () => {
      const doors = 10;
      const result = getGame({ doors });

      expect(result.selectedDoor).toBeGreaterThanOrEqual(0);
      expect(result.selectedDoor).toBeLessThan(doors);

      expect(result.prize).toBeGreaterThanOrEqual(0);
      expect(result.prize).toBeLessThan(doors);
    });
  });
});
