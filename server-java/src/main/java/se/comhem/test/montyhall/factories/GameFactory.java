package se.comhem.test.montyhall.factories;

import se.comhem.test.montyhall.models.Game;

public interface GameFactory {
    public Game createGame(int doors);
}
