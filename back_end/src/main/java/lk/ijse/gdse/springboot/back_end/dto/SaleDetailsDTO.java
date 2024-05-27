package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleDetailsDTO {
    private int no;
    private String orderNo;
    private String itemCode;
    private String itemDesc;
    private int size;
    private int quantity;
    private double unitPrice;
}
