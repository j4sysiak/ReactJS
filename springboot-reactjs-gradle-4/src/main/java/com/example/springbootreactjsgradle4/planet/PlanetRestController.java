package com.example.springbootreactjsgradle4.planet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PlanetRestController {

    private List<Planet> planets = List.of(
            new Planet(0, "Mercury BE"),
            new Planet(1, "Venus BE"),
            new Planet(2, "Earth BE"),
            new Planet(3, "Mars BE"),
            new Planet(4, "Jupiter BE"),
            new Planet(5, "Saturn BE")
    );

    @GetMapping("/api/planet")
    public List<Planet> getPlanets(){
        return planets;
    }

    @PostMapping("/api/planet")
    public List<Planet> setPlanets(@RequestBody List<Planet> newplanets){
        planets = newplanets;
        return planets;
    }

}
