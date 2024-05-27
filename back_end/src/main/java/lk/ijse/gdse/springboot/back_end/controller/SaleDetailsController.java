package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import lk.ijse.gdse.springboot.back_end.service.SaleDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/salesDetails")
@CrossOrigin
public class SaleDetailsController {

    private SaleDetailsService saleDetailsService;


  /*  @GetMapping("/refund")
    public List<SaleDetailsDTO> getRefund(){
        return saleDetailsService.getAllRefundOrders();
    }*/
}
