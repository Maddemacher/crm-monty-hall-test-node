package se.comhem.test.montyhall.controllers;

import se.comhem.test.montyhall.models.SimulationRequest;
import se.comhem.test.montyhall.models.SimulationResult;

import se.comhem.test.montyhall.service.SimulationService;

import java.util.stream.IntStream;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MontyHallController {

    private final SimulationService service;

    @Autowired
    public MontyHallController(SimulationService service) {
        this.service = service;
    }

    @GetMapping("/simulate")
    @ResponseBody
    public ResponseEntity<?> simulate(@RequestParam(required = true) int games,
            @RequestParam(required = false, defaultValue = "3") int doors,
            @RequestParam(required = true) boolean changing) {

        SimulationRequest request = new SimulationRequest(games, doors, changing);

        final SimulationResult result = new SimulationResult(IntStream.range(0, request.getGames())
                .mapToObj(idx -> this.service.simulate(request)).collect(Collectors.toList()));

        return new ResponseEntity<SimulationResult>(result, HttpStatus.OK);

    }
}