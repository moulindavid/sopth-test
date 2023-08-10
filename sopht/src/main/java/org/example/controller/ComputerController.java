package org.example.controller;

import java.util.List;
import java.util.Map;

import org.example.model.ComputerEntity;
import org.example.service.ComputerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/computers")
public class ComputerController {
    private final ComputerService computerService;

    public ComputerController(ComputerService computerService) {
        this.computerService = computerService;
    }

    @PostMapping()
    public ResponseEntity<List<ComputerEntity>> createComputers(@RequestBody List<ComputerEntity> computers) {
        return ResponseEntity.ok(computerService.createComputers(computers));
    }

    @GetMapping
    public ResponseEntity<List<ComputerEntity>> getComputers() {
        return ResponseEntity.ok(computerService.getComputers());
    }

    @GetMapping("/last-year-expenses")
    public ResponseEntity<Map<String, Float>> getLastYearMonthlyExpenses() {
        return ResponseEntity.ok(computerService.getLastYearMonthlyExpenses());
    }

    @GetMapping("/expenses")
    public ResponseEntity<Float> getMonthlyExpenses(@RequestParam int year, @RequestParam int month) {
        return ResponseEntity.ok(computerService.getExpensesForMonth(year, month));
    }

    @GetMapping("/consumptions")
    public ResponseEntity<Float> getEnergyConsumptionForMonth(@RequestParam int year, @RequestParam int month) {
        //FIXME: accept string month.
        return ResponseEntity.ok(computerService.getEnergyConsumptionForMonth(year, month));
    }

}
