package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lk.ijse.gdse.springboot.back_end.util.Gender;
import lk.ijse.gdse.springboot.back_end.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    private String employeeCode;
    private String employeeName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String status;
    private String designation;
    @Enumerated(EnumType.STRING)
    private Role accessRole;
    private Date dob;
    private  Date dateOfJoin;
    private String attachedBranch;
    private String addressLine01;
    private String addressLine02;
    private String addressLine03;
    private String addressLine04;
    private String addressLine05;
    private String contactNo;
    private String email;
    private String informInCaseOfEmergency;
    private String emergencyContact;
    @Column(columnDefinition = "LONGTEXT")
    private String employeePicture;

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Role getAccessRole() {
        return accessRole;
    }

    public void setAccessRole(Role accessRole) {
        this.accessRole = accessRole;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Date getDateOfJoin() {
        return dateOfJoin;
    }

    public void setDateOfJoin(Date dateOfJoin) {
        this.dateOfJoin = dateOfJoin;
    }

    public String getAttachedBranch() {
        return attachedBranch;
    }

    public void setAttachedBranch(String attachedBranch) {
        this.attachedBranch = attachedBranch;
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

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInformInCaseOfEmergency() {
        return informInCaseOfEmergency;
    }

    public void setInformInCaseOfEmergency(String informInCaseOfEmergency) {
        this.informInCaseOfEmergency = informInCaseOfEmergency;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public String getEmployeePicture() {
        return employeePicture;
    }

    public void setEmployeePicture(String employeePicture) {
        this.employeePicture = employeePicture;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeCode='" + employeeCode + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", gender=" + gender +
                ", status='" + status + '\'' +
                ", designation='" + designation + '\'' +
                ", accessRole=" + accessRole +
                ", dob=" + dob +
                ", dateOfJoin=" + dateOfJoin +
                ", attachedBranch='" + attachedBranch + '\'' +
                ", addressLine01='" + addressLine01 + '\'' +
                ", addressLine02='" + addressLine02 + '\'' +
                ", addressLine03='" + addressLine03 + '\'' +
                ", addressLine04='" + addressLine04 + '\'' +
                ", addressLine05='" + addressLine05 + '\'' +
                ", contactNo='" + contactNo + '\'' +
                ", email='" + email + '\'' +
                ", informInCaseOfEmergency='" + informInCaseOfEmergency + '\'' +
                ", emergencyContact='" + emergencyContact + '\'' +
                ", employeePicture='" + employeePicture + '\'' +
                '}';
    }
}
