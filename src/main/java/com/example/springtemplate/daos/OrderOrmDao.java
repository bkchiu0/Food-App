package com.example.springtemplate.daos;

import com.example.springtemplate.models.Order;
import com.example.springtemplate.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderOrmDao {
    @Autowired
    OrderRepository orderRepository;

    /**
     * Creates an order
     * @param order order data
     * @return the created order
     */
    @PostMapping("/api/order")
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    /**
     * Finds all orders
     * @return list of orders
     */
    @GetMapping("/api/order")
    public List<Order> findAllOrders() {
        return orderRepository.findAllOrders();
    }

    /**
     * Finds order by id
     * @param id the id of the order
     * @return the found order
     */
    @GetMapping("/api/order/{orderId}")
    public Order findOrderById(
            @PathVariable("orderId") Integer id) {
        return orderRepository.findOrderById(id);
    }

    /**
     * Updates the specified order
     * @param id the id of the order
     * @param orderUpdates update data for the order
     * @return the updated order
     */
    @PutMapping("/api/order/{orderId}")
    public Order updateOrder(
            @PathVariable("orderId") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findOrderById(id);
        order.setDescription(orderUpdates.getDescription());
        order.setPlaced(orderUpdates.getPlaced());
        order.setUserId(orderUpdates.getUserId());
        return orderRepository.save(order);
    }

    /**
     * Deletes the specified order
     * @param id the specified order id
     */
    @DeleteMapping("/api/order/{orderId}")
    public void deleteOrder(
            @PathVariable("orderId") Integer id) {
        orderRepository.deleteById(id);
    }
}
