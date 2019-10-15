package se.comhem.test.montyhall.service;

import org.springframework.stereotype.Service;

import se.comhem.test.montyhall.models.*;

@Service
public class MontyHallServiceImpl implements MontyHallService {
    public boolean simulate(SimulationRequest request) {
        Game game = new Game(request.getDoors());

        if (request.getChanging()) {
            return game.getSelectedDoor() != game.getPrize();
        }

        return game.getSelectedDoor() == game.getPrize();
    }
}