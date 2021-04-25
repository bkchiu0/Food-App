package com.example.springtemplate.repositories;

import com.example.springtemplate.models.NutritionalInformation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NutritionalInformationRepository extends CrudRepository<NutritionalInformation, Integer> {
    @Query(value = "SELECT * FROM food.nutritional_information", nativeQuery = true)
    public List<NutritionalInformation> findAllNutritionalInformation();

    @Query(value = "SELECT * FROM food.nutritional_information WHERE id=:nutrId", nativeQuery = true)
    public NutritionalInformation findNutritionalInformationById(@Param("nutrId") Integer id);

    @Query(value = "SELECT * FROM food.nutritional_information WHERE food_id=:foodId", nativeQuery = true)
    public NutritionalInformation findNutritionalInformationByFoodId(@Param("foodId") Integer id);
}
