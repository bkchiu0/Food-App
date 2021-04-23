package com.example.springtemplate.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="nutritional_information", schema="food")
public class NutritionalInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Integer id;

    @Getter
    @Setter
    @Column(name = "calories")
    private Integer calories;

    @Getter
    @Setter
    @Column(name = "total_fat_g")
    private Float totalFatG;

    @Getter
    @Setter
    @Column(name = "cholesterol_mg")
    private Float cholesterolMg;

    @Getter
    @Setter
    @Column(name = "sodium_mg")
    private Float sodiumMg;

    @Getter
    @Setter
    @Column(name = "carbohydrates_g")
    private Float carbohydratesG;

    @Getter
    @Setter
    @Column(name = "protein_g")
    private Float proteinG;

    @Getter
    @Setter
    private Integer foodId;

    public NutritionalInformation(Integer id,
                                  Integer calories,
                                  Float totalFatG,
                                  Float cholesterolMg,
                                  Float sodiumMg,
                                  Float carbohydratesG,
                                  Float proteinG,
                                  Integer foodId) {
        this.id = id;
        this.calories = calories;
        this.totalFatG = totalFatG;
        this.cholesterolMg = cholesterolMg;
        this.sodiumMg = sodiumMg;
        this.carbohydratesG = carbohydratesG;
        this.proteinG = proteinG;
        this.foodId = foodId;
    }

    public NutritionalInformation() {}
}
