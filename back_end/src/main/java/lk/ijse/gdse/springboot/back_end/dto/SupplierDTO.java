package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class SupplierDTO {
    private String supplierCode;
    private String supplierName;
    private String category;
    private String addressLine01;
    private String addressLine02;
    private String addressLine03;
    private String addressLine04;
    private String addressLine05;
    private String addressLine06;
    private String contactNo1;
    private String contactNo2;
    private String email;

    public String getSupplierCode() {
        return supplierCode;
    }

    public void setSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAddressLine01() {
        return addressLine01;
    }

    public void setAddressLine01(String addressLine01) {
        this.addressLine01 = addressLine01;
    }

    public String getAddressLine02() {
        return addressLine02;
    }

    public void setAddressLine02(String addressLine02) {
        this.addressLine02 = addressLine02;
    }

    public String getAddressLine03() {
        return addressLine03;
    }

    public void setAddressLine03(String addressLine03) {
        this.addressLine03 = addressLine03;
    }

    public String getAddressLine04() {
        return addressLine04;
    }

    public void setAddressLine04(String addressLine04) {
        this.addressLine04 = addressLine04;
    }

    public String getAddressLine05() {
        return addressLine05;
    }

    public void setAddressLine05(String addressLine05) {
        this.addressLine05 = addressLine05;
    }

    public String getContactNo1() {
        return contactNo1;
    }

    public void setContactNo1(String contactNo1) {
        this.contactNo1 = contactNo1;
    }

    public String getContactNo2() {
        return contactNo2;
    }

    public void setContactNo2(String contactNo2) {
        this.contactNo2 = contactNo2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddressLine06() {
        return addressLine06;
    }

    public void setAddressLine06(String addressLine06) {
        this.addressLine06 = addressLine06;
    }

    @Override
    public String toString() {
        return "SupplierDTO{" +
                "supplierCode='" + supplierCode + '\'' +
                ", supplierName='" + supplierName + '\'' +
                ", category='" + category + '\'' +
                ", addressLine01='" + addressLine01 + '\'' +
                ", addressLine02='" + addressLine02 + '\'' +
                ", addressLine03='" + addressLine03 + '\'' +
                ", addressLine04='" + addressLine04 + '\'' +
                ", addressLine05='" + addressLine05 + '\'' +
                ", addressLine06='" + addressLine06 + '\'' +
                ", contactNo1='" + contactNo1 + '\'' +
                ", contactNo2='" + contactNo2 + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
