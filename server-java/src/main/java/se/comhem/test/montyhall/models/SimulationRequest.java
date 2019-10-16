package se.comhem.test.montyhall.models;

public class SimulationRequest {
	private final int games;
	private final int doors;
	private final boolean changing;

	public SimulationRequest(int games, int doors, boolean changing) {
		this.games = games;
		this.doors = doors;
		this.changing = changing;
	}

	public int getGames() {
		return this.games;
	}

	public int getDoors() {
		return this.doors;
	}

	public boolean getChanging() {
		return this.changing;
	}
}