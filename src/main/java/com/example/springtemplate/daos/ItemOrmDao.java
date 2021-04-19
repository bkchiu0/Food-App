package com.example.springtemplate.daos;

import com.example.springtemplate.models.Item;
import com.example.springtemplate.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class ItemOrmDao {
    @Autowired
    ItemRepository itemRepository;

    /**
     * Creates an order item (food selection for an order)
     * @param item specified order item
     * @return the newly created item
     */
    @PostMapping("/api/item")
    public Item createItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }

    /**
     * Finds all items
     * @return list of items
     */
    @GetMapping("/api/item")
    public List<Item> findAllItems() {
        return itemRepository.findAllItems();
    }

    /**
     * Finds item by its id
     * @param id specified id of the item
     * @return the found item
     */
    @GetMapping("/api/item/{itemId}")
    public Item findItemById(
            @PathVariable("itemId") Integer id) {
        return itemRepository.findItemById(id);
    }

    /**
     * Updates an items information
     * @param id the id of the item
     * @param itemUpdates the new item data
     * @return the updated item
     */
    @PutMapping("/api/item/{itemId}")
    public Item updateItem(
            @PathVariable("itemId") Integer id,
            @RequestBody Item itemUpdates) {
        Item item = itemRepository.findItemById(id);
        item.setOrderId(itemUpdates.getOrderId());
        item.setFoodId(itemUpdates.getFoodId());
        return itemRepository.save(item);
    }

    /**
     * Deletes item by id
     * @param id the specified id
     */
    @DeleteMapping("/api/item/{itemId}")
    public void deleteItem(
            @PathVariable("itemId") Integer id) {
        itemRepository.deleteById(id);
    }
}
