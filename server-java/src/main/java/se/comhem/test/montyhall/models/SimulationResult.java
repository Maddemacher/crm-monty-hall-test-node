package se.comhem.test.montyhall.models;

import java.util.List;

public class SimulationResult {
    private final int wins;
    private final int games;

    public SimulationResult(final List<Boolean> results) {
        this.wins = (int) results.stream().filter(res -> res).count();
        this.games = (int) results.size();
    }

    public int getWins() {
        return this.wins;
    }

    public int getLosses() {
        return this.games - this.wins;
    }

    public int getGames() {
        return this.games;
    }

    public float getAvg() {
        if (this.games == 0) {
            return 0;
        }

        return this.wins / (float) this.games;
    }
}
