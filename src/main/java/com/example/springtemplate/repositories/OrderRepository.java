package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Integer> {
    @Query(value = "SELECT * FROM food.order", nativeQuery = true)
    public List<Order> findAllOrders();

    @Query(value = "SELECT * FROM food.order WHERE id=:orderId", nativeQuery = true)
    public Order findOrderById(@Param("orderId") Integer id);

    @Query(value = "SELECT * FROM food.order WHERE user_id=:userId", nativeQuery = true)
    public List<Order> findAllOrdersForUser(@Param("userId") Integer id);
}
