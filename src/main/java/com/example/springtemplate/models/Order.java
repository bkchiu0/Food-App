package com.example.springtemplate.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="order", schema="food")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private Timestamp placed;

    @Getter
    @Setter
    private Integer userId;

    public Order(Integer id, String description, Timestamp placed, Integer userId) {
        this.id = id;
        this.description = description;
        this.placed = placed;
        this.userId = userId;
    }

    public Order(){}
}
