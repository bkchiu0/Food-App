package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime placed;

    @Getter
    @Setter
    private Integer userId;

    public Order(Integer id, String description, LocalDateTime placed, Integer userId) {
        this.id = id;
        this.description = description;
        this.placed = placed;
        this.userId = userId;
    }

    public Order() {}
}
