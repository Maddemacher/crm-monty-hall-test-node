package se.comhem.test.montyhall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import se.comhem.test.montyhall.factories.GameFactory;

import se.comhem.test.montyhall.models.Game;
import se.comhem.test.montyhall.models.SimulationRequest;

@Service
public class SimulationServiceImpl implements SimulationService {

    GameFactory gameFactory;

    @Autowired
    public SimulationServiceImpl(GameFactory gameFactory) {
        this.gameFactory = gameFactory;
    }

    public boolean simulate(SimulationRequest request) {
        Game game = this.gameFactory.createGame(request.getDoors());

        if (request.getChanging()) {
            return game.getSelectedDoor() != game.getPrize();
        }

        return game.getSelectedDoor() == game.getPrize();
    }
}