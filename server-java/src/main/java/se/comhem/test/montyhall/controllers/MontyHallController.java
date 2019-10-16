package se.comhem.test.montyhall.controllers;

import se.comhem.test.montyhall.models.*;
import se.comhem.test.montyhall.service.*;

import java.util.stream.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MontyHallController {

    private SimulationService service;

    @Autowired
    public MontyHallController(SimulationService service) {
        this.service = service;
    }

    @GetMapping("/simulate")
    @ResponseBody
    public ResponseEntity<?> simulate(SimulationRequest request) {
        if (request == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        SimulationResult result = new SimulationResult(IntStream.range(0, request.getGames())
                .mapToObj(idx -> this.service.simulate(request)).collect(Collectors.toList()));

        return new ResponseEntity<SimulationResult>(result, HttpStatus.OK);

    }
}