package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public interface SaleService {
    List<SaleDTO> getAllSaleDetails();
    void saveSale(SaleDTO saleDTO);
    String getNextId();
    String splitId(String id);
    void updateSale(SaleDTO saleDTO);
    void deleteSale(String id);
    List<SaleDTO> getAllRefundOrders();
}
