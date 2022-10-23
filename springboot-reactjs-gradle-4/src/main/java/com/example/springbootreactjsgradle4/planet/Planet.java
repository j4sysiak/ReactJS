package com.example.springbootreactjsgradle4.planet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Planet {
    private Integer id;
    private String name;
    private boolean localSolarSystem;
    private boolean habitable;
}




















