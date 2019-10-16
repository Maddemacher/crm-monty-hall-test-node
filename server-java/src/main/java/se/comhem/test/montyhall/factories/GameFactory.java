package se.comhem.test.montyhall.factories;

import se.comhem.test.montyhall.models.Game;

public interface GameFactory {
    Game createGame(final int doors);
}
