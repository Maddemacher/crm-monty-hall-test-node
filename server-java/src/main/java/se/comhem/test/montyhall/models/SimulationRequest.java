package se.comhem.test.montyhall.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimulationRequest {
	private int games;
	private int doors;
	private boolean changing;

	public SimulationRequest() {
		this.games = 1;
		this.doors = 3;

	}

	public SimulationRequest(int games, int doors, boolean changing) {
		this.games = games;
		this.doors = doors;
		this.changing = changing;
	}

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