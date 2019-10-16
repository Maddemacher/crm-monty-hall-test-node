
package se.comhem.test.montyhall.factories;

import org.springframework.stereotype.Service;

import se.comhem.test.montyhall.models.Game;

@Service
public class GameFactoryImpl implements GameFactory {

    public Game createGame(int doors) {
        return new Game(doors);
    }

}