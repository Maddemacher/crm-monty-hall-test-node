package se.comhem.test.montyhall.models;

import java.util.List;

public class SimulationResult {
    private int wins;
    private int games;

    public SimulationResult(final List<Boolean> results) {
        this.wins = (int) results.stream().filter(res -> res).count();
        this.games = (int) results.size();
    }

    public int getWins() {
        return this.wins;
    }

    public void setWins(final int wins) {
        this.wins = wins;
    }

    public int getLosses() {
        return this.games - this.wins;
    }

    public int getGames() {
        return this.games;
    }

    public void setGames(final int games) {
        this.games = games;
    }

    public float getAvg() {
        if (this.games == 0) {
            return 0;
        }

        return this.wins / (float) this.games;
    }
}