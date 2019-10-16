package se.comhem.test.montyhall.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimulationRequest {
	private final int games;
	private final int doors;
	private final boolean changing;

	@JsonCreator
	public SimulationRequest(@JsonProperty(value = "games", required = true) int games,
			@JsonProperty(value = "doors", required = true) int doors,
			@JsonProperty(value = "changing") boolean changing) {
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