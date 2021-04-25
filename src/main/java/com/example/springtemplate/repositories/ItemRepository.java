package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends CrudRepository<Item, Integer> {
    @Query(value = "SELECT * FROM food.item", nativeQuery = true)
    public List<Item> findAllItems();

    @Query(value = "SELECT * FROM food.item WHERE id=:itemId", nativeQuery = true)
    public Item findItemById(@Param("itemId") Integer id);

    @Query(value = "SELECT * FROM food.item WHERE order_id=:orderId", nativeQuery = true)
    public List<Item> findItemsByOrder(@Param("orderId") Integer id);

    @Query(value = "SELECT * FROM food.item WHERE food_id=:foodId", nativeQuery = true)
    public List<Item> findItemsByFood(@Param("foodId") Integer id);
}
