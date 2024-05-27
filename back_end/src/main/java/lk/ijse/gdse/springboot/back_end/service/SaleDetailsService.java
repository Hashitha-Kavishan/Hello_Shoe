package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.CustomerDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.Sale;

import java.util.List;

public interface SaleDetailsService {
    List<SaleDetailsDTO> getAllSaleDetails();
    SaleDetailsDTO getSaleDetails(String id);
    void saveSaleDetails(SaleDetailsDTO saleDetailsDTO);
    void deleteSaleDetails(String id);
    SaleDetailsDTO getTopSale();
}
