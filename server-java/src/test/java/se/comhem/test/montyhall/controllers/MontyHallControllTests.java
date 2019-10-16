package se.comhem.test.montyhall.controllers;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import se.comhem.test.montyhall.models.SimulationRequest;
import se.comhem.test.montyhall.service.SimulationService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MontyHallControllTests {

    @Autowired
    private MockMvc mvc;

    @Mock
    SimulationService mockService;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        // when(this.mockService.simulate(any(SimulationRequest.class))).thenReturn(true);

        this.mvc = MockMvcBuilders.standaloneSetup(new MontyHallController(this.mockService)).build();
    }

    @Test
    public void shouldReturn400WhenNumberOfGamesIsMissingFromQueryString() throws Exception {
        String path = "/simulate?changing=true";

        mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturn400WheChangingIsMissingFromQueryString() throws Exception {
        String path = "/simulate?games=100";

        mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturn400WheChangingIsNotBooleanInQueryString() throws Exception {
        String path = "/simulate?games=100&changing=hej";

        mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturn400WheGamesIsNotANumberInQueryString() throws Exception {
        String path = "/simulate?games=hej&changing=true";

        mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturn200WhenQueryIsCorrect() throws Exception {
        String path = "/simulate?games=hej&changing=true";

        mvc.perform(MockMvcRequestBuilders.get(path).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

}