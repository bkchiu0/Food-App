package com.example.springtemplate.daos;

import com.example.springtemplate.models.NutritionalInformation;
import com.example.springtemplate.repositories.NutritionalInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class NutritionalInformationDao {
    @Autowired
    NutritionalInformationRepository nutrInfoRepository;

    /**
     * Creates a nutritional information instance
     * @param information nutritional information
     * @return the newly created instance
     */
    @PostMapping("/api/nutrition")
    public NutritionalInformation createNutritionalInformation(@RequestBody NutritionalInformation information) {
        return nutrInfoRepository.save(information);
    }

    /**
     * Finds all nutritional information data
     * @return list of nutritional information
     */
    @GetMapping("/api/nutrition")
    public List<NutritionalInformation> findAllNutritionalInformation() {
        return nutrInfoRepository.findAllNutritionalInformation();
    }

    /**
     * Finds nutritional information by id
     * @param id id of the nutritional information data
     * @return the nutritional information data
     */
    @GetMapping("/api/nutrition/{nutrId}")
    public NutritionalInformation findNutritionalInformationById(
            @PathVariable("nutrId") Integer id) {
        return nutrInfoRepository.findNutritionalInformationById(id);
    }

    /**
     * Finds nutritional information by food id
     * @param id food id
     * @return associated nutritional information
     */
    @GetMapping("/api/nutrition/food/{foodId}")
    public NutritionalInformation findNutritionalInformationByFoodId(
            @PathVariable("foodId") Integer id){
        return nutrInfoRepository.findNutritionalInformationByFoodId(id);
    }

    /**
     * Update nutritional information
     * @param id the id of nutritional information
     * @param informationUpdate data to update
     * @return the newly updated information
     */
    @PutMapping("/api/nutrition/{nutrId}")
    public NutritionalInformation updateNutritionalInformation(
            @PathVariable("nutrId") Integer id,
            @RequestBody NutritionalInformation informationUpdate) {
        NutritionalInformation info = nutrInfoRepository.findNutritionalInformationById(id);
        info.setCalories(informationUpdate.getCalories());
        info.setCarbohydratesG(informationUpdate.getCarbohydratesG());
        info.setCholesterolMg(informationUpdate.getCholesterolMg());
        info.setFoodId(informationUpdate.getFoodId());
        info.setProteinG(informationUpdate.getProteinG());
        info.setSodiumMg(informationUpdate.getSodiumMg());
        info.setTotalFatG(informationUpdate.getTotalFatG());
        return nutrInfoRepository.save(info);
    }

    /**
     * Deletes the nutritional information by id
     * @param id the specified id of the nutritional information
     */
    @DeleteMapping("/api/nutrition/{nutrId}")
    public void deleteNutritionalInformation(
            @PathVariable("nutrId") Integer id) {
        nutrInfoRepository.deleteById(id);
    }
}
