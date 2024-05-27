package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleDTO {
    private String orderNo;
    private String customerCode;
    private String customerName;
    private double totalPrice;
    private Timestamp purchaseDate;
    private String paymentMethod;
    private int addedPoints;
    private String cashierName;
    private String employeeCode;
    private List<SaleDetailsDTO> saleDetails;

    public SaleDTO(String orderNo, String customerCode, String customerName, double totalPrice, Timestamp purchaseDate, String paymentMethod, int addedPoints, String cashierName, String employeeCode) {
        this.orderNo = orderNo;
        this.customerCode = customerCode;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
        this.purchaseDate = purchaseDate;
        this.paymentMethod = paymentMethod;
        this.addedPoints = addedPoints;
        this.cashierName = cashierName;
        this.employeeCode = employeeCode;
    }
}
