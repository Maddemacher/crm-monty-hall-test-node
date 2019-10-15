package se.comhem.test.montyhall.models;

public class SimulationRequest {
	private int games = 1;
	private int doors = 3;
	private boolean changing;

	public int getGames() {
		return this.games;
	}

	public void setGames(int games) {
		this.games = games;
	}

	public int getDoors() {
		return this.doors;
	}

	public void setDoors(int doors) {
		this.doors = doors;
	}

	public boolean getChanging() {
		return this.changing;
	}

	public void setChanging(boolean changing) {
		this.changing = changing;
	}
}