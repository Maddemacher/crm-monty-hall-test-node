package se.comhem.test.montyhall.models;

import java.util.Random;

public class Game {
    private int selectedDoor;
    private int prize;

    public Game() {
        Random r = new Random();

        this.prize = r.nextInt(3);
        this.selectedDoor = r.nextInt(3);
    }

    public Game(int doors) {
        Random r = new Random();

        this.prize = r.nextInt(doors);
        this.selectedDoor = r.nextInt(doors);
    }

    public int getSelectedDoor() {
        return this.selectedDoor;
    }

    public int getPrize() {
        return this.prize;
    }
}