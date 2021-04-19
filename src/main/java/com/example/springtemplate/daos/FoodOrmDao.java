package com.example.springtemplate.daos;

import com.example.springtemplate.models.Food;
import com.example.springtemplate.repositories.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class FoodOrmDao {
    @Autowired
    FoodRepository foodRepository;

    /**
     * Create food
     * @param food food data to add
     * @return newly created food
     */
    @PostMapping("/api/food")
    public Food createFood(@RequestBody Food food) {
        return foodRepository.save(food);
    }

    /**
     * Finds all food data
     * @return list of food
     */
    @GetMapping("/api/food")
    public List<Food> findAllFood() {
        return foodRepository.findAllFood();
    }

    /**
     * Finds food by id
     * @param id id of the food
     * @return the food data
     */
    @GetMapping("/api/food/{foodId}")
    public Food findFoodById(
            @PathVariable("foodId") Integer id) {
        return foodRepository.findFoodById(id);
    }

    /**
     * Update food instance
     * @param id the id of the food
     * @param foodUpdates data to update
     * @return the newly updated food
     */
    @PutMapping("/api/food/{foodId}")
    public Food updateFood(
            @PathVariable("foodId") Integer id,
            @RequestBody Food foodUpdates) {
        Food food = foodRepository.findFoodById(id);
        food.setName(foodUpdates.getName());
        food.setDescription(foodUpdates.getDescription());
        food.setPrice(foodUpdates.getPrice());
        food.setFoodType(foodUpdates.getFoodType());
        return foodRepository.save(food);
    }

    /**
     * Deletes the food instance by id
     * @param id the specified id of the food
     */
    @DeleteMapping("/api/food/{foodId}")
    public void deleteFood(
            @PathVariable("foodId") Integer id) {
        foodRepository.deleteById(id);
    }
}
