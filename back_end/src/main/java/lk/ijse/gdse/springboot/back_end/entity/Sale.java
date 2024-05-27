package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sale")
public class Sale {

    @Id
    private String orderNo;
    @ManyToOne
    @JoinColumn(name = "customerCode",referencedColumnName = "customerCode")
    private Customer customer;
    private String customerName;
    private double totalPrice;
    private Timestamp PurchaseDate;
    private String PaymentMethod;
    private int addedPoints;
    private String cashierName;
    @ManyToOne
    @JoinColumn(name = "employeeCode",referencedColumnName = "employeeCode")
    private Employee employee;
}
