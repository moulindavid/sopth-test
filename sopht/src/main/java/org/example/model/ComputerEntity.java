package org.example.model;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class ComputerEntity implements Serializable {

    @Id
    @GeneratedValue
    @Column
    private UUID id;
    @Column(name = "computer_name")
    private String name;
    @Column
    private Date boughtDate;
    @Column
    private float boughtPrice;

    //FIXME: unit ?
    @Column
    private float annualConsumption;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBoughtDate() {
        return boughtDate;
    }

    public void setBoughtDate(Date boughtDate) {
        this.boughtDate = boughtDate;
    }

    public float getBoughtPrice() {
        return boughtPrice;
    }

    public void setBoughtPrice(float boughtPrice) {
        this.boughtPrice = boughtPrice;
    }

    public float getAnnualConsumption() {
        return annualConsumption;
    }

    public void setAnnualConsumption(float annualConsumption) {
        this.annualConsumption = annualConsumption;
    }
}
