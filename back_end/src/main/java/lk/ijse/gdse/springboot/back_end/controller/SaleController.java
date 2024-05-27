package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.service.SaleService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sales")
@CrossOrigin
public class SaleController {

    private SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping("/getAll")
    public List<SaleDTO> getAllSales(){
        return saleService.getAllSaleDetails();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveSale(@RequestBody SaleDTO saleDTO){
        saleService.saveSale(saleDTO);
    }

    @GetMapping("/orderID")
    public String getOrederID(){
        return saleService.getNextId();
    }

    @PatchMapping
    public void updateSales(@RequestBody SaleDTO saleDTO){
        saleService.updateSale(saleDTO);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteSales(@PathVariable("id") String id){
        saleService.deleteSale(id);
    }

    @GetMapping("/refund")
    public List<SaleDTO> getRefund(){
        return saleService.getAllRefundOrders();
    }
}
