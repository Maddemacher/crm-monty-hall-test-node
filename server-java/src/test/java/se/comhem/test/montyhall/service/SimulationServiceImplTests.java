package se.comhem.test.montyhall.service;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import se.comhem.test.montyhall.factories.GameFactory;
import se.comhem.test.montyhall.models.Game;
import se.comhem.test.montyhall.models.SimulationRequest;

public class SimulationServiceImplTests {

    SimulationService service;

    @Mock
    GameFactory mockFactory;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        this.service = new SimulationServiceImpl(mockFactory);
    }

    @Test
    public void shouldSimulateGameWhereUserIsChangingHisAlternativeAndOutcomeIsAWin() {
        when(mockFactory.createGame(10)).thenReturn(new Game(0, 1));

        assertTrue(service.simulate(new SimulationRequest(1, 10, true)));
    }

    @Test
    public void shouldSimulateGameWhereUserIsNotChangingHisAlternativeAndOutcomeIsAWin() {
        when(mockFactory.createGame(10)).thenReturn(new Game(1, 1));

        assertTrue(service.simulate(new SimulationRequest(1, 10, false)));
    }

    @Test
    public void shouldSimulateGameWhereUserIsChangingHisAlternativeAndOutcomeIsALoss() {
        when(mockFactory.createGame(10)).thenReturn(new Game(0, 0));

        assertFalse(service.simulate(new SimulationRequest(1, 10, true)));

    }

    @Test
    public void shouldSimulateGameWhereUserIsNotChangingHisAlternativeAndOutcomeIsALoss() {
        when(mockFactory.createGame(10)).thenReturn(new Game(0, 1));

        assertFalse(service.simulate(new SimulationRequest(1, 10, false)));
    }
}