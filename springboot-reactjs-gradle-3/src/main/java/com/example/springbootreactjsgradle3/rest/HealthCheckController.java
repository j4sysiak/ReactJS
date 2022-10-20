package com.example.springbootreactjsgradle3.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api")
public class HealthCheckController {

    @GetMapping
    String healthCheck(){
        return "Up and running: " + LocalDateTime.now().toString();
    }
}

