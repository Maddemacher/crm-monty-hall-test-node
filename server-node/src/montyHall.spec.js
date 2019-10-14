import * as game from './game';
import { simulate } from './montyHall';

describe('montyHall', () => {
  let getGameMock;

  beforeEach(() => {
    getGameMock = jest.fn(() => ({
      prize: 0,
      selectedDoor: 0
    }));

    jest.spyOn(game, 'getGame').mockImplementation(getGameMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#simulate', () => {
    it('should simulate game where user is changing his alternative and outcome is a win', () => {
      getGameMock.mockReturnValue({
        prize: 0,
        selectedDoor: 1
      });

      const result = simulate({ changing: true });

      expect(result).toBe(true);
    });
    it('should simulate game where user is not changing his alternative and outcome is a win', () => {
      getGameMock.mockReturnValue({
        prize: 1,
        selectedDoor: 1
      });

      const result = simulate({ changing: false });

      expect(result).toBe(true);
    });

    it('should simulate game where user is changing his alternative and outcome is a loss', () => {
      getGameMock.mockReturnValue({
        prize: 0,
        selectedDoor: 0
      });

      const result = simulate({ changing: true });

      expect(result).toBe(false);
    });

    it('should simulate game where user is not changing his alternative and outcome is a loss', () => {
      getGameMock.mockReturnValue({
        prize: 0,
        selectedDoor: 1
      });

      const result = simulate({ changing: false });

      expect(result).toBe(false);
    });

    it('should pass number of doors to game creator', () => {
      simulate({ changing: false, doors: 1337 });

      expect(getGameMock).toHaveBeenCalledWith({ doors: 1337 });
    });
  });
});
