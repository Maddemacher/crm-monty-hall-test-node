package se.comhem.test.montyhall.service;

import se.comhem.test.montyhall.models.SimulationRequest;

public interface SimulationService {
    boolean simulate(SimulationRequest request);
}
