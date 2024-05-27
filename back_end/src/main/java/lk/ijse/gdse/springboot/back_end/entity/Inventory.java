package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "inventory")
public class Inventory {

    @Id
    private String itemCode;
    private String itemDesc;
    @Column(columnDefinition = "LONGTEXT")
    private String itemPicture;
    private String category;
    private int quantitySize5;
    private int quantitySize6;
    private int quantitySize7;
    private int quantitySize8;
    private int quantitySize9;
    private int quantitySize10;
    private int quantitySize11;
    @ManyToOne
    @JoinColumn(name = "supplierCode",referencedColumnName = "supplierCode")
    private Supplier supplier;
    private String supplierName;
    private double unitPriceSale;
    private double unitPriceBuy;
    private double expectedProfit;
    private double profitMargin;
    private String status;


}
