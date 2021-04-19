package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Food;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends CrudRepository<Food, Integer> {
    @Query(value = "SELECT * FROM food.food", nativeQuery = true)
    public List<Food> findAllFood();

    @Query(value = "SELECT * FROM food.food WHERE id=:foodId", nativeQuery = true)
    public Food findFoodById(@Param("foodId") Integer id);
}
