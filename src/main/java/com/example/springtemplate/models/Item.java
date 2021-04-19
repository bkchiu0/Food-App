package com.example.springtemplate.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="item", schema="food")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Getter
    @Setter
    private Integer orderId;

    @Getter
    @Setter
    private Integer foodId;

    public Item(Integer id, Integer orderId, Integer foodId) {
        this.id = id;
        this.orderId = orderId;
        this.foodId = foodId;
    }

    public Item() {}
}
