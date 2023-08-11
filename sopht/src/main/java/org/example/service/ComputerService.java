package org.example.service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.example.model.ComputerEntity;
import org.example.repository.ComputerRepository;
import org.springframework.stereotype.Service;

@Service
public class ComputerService {
    //FIXME: use dto for creation and returning value and map using mapstruct or anything else.
    private final ComputerRepository computerRepository;


    public ComputerService(ComputerRepository computerRepository) {
        this.computerRepository = computerRepository;
    }

    public List<ComputerEntity> createComputers(List<ComputerEntity> computers) {
        //FIXME: should check the data before inserting them e.g: check for incoherent date or other erroneous data, date format.
        return computerRepository.saveAll(computers);
    }
    public List<ComputerEntity> getComputers() {
        return computerRepository.findAll();
    }

    public Map<String, Float> getLastYearMonthlyExpenses() {
        //FIXME: we should also use the
        LocalDate today = LocalDate.now();
        Map<String, Float> lastYearExpenses = new HashMap<>();

        for (long i = 0; i < 12; i++) {
            LocalDate currentDate = today.minusMonths(i);
            lastYearExpenses.put(currentDate.getMonth().toString(),
                    computerRepository.getBoughtPricesForMonth(currentDate.getYear(), currentDate.getMonth().getValue()));
        }
        return lastYearExpenses;
    }

    public Float getEnergyConsumptionForMonth(int year, int month) {
        return computerRepository.getEnergyConsumptionForMonth(year, month) / 12;
    }

    public Float getExpensesForMonth(int year, int month) {
        return computerRepository.getBoughtPricesForMonth(year, month);
    }
}
