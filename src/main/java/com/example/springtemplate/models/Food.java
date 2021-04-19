package com.example.springtemplate.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="food", schema="food")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private Float price;

    @Getter
    @Setter
    private String foodType;

    public Food(Integer id, String name, String description, Float price, String foodType) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.foodType = foodType;
    }

    public Food() {}
}
