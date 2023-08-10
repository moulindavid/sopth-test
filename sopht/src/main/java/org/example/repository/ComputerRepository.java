package org.example.repository;

import java.util.UUID;

import org.example.model.ComputerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ComputerRepository extends JpaRepository<ComputerEntity, UUID> {

    @Query("SELECT SUM(c.boughtPrice) FROM ComputerEntity c " +
            "WHERE YEAR(c.boughtDate) <= :year OR (YEAR(c.boughtDate) = :year AND MONTH(c.boughtDate) <= :month)")
    Float getBoughtPricesForMonth(int year, int month);

    @Query("SELECT SUM(c.annualConsumption) FROM ComputerEntity c " +
            "WHERE YEAR(c.boughtDate) <= :year OR (YEAR(c.boughtDate) = :year AND MONTH(c.boughtDate) <= :month)")
    Float getEnergyConsumptionForMonth(int year, int month);
}
