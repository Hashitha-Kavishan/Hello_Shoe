package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;

public interface CustomerRepo extends JpaRepository<Customer,String> {
   Customer findByCustomerCode(String code);
}
