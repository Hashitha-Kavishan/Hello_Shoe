package lk.ijse.gdse.springboot.back_end.dto;

import lk.ijse.gdse.springboot.back_end.util.Gender;
import lk.ijse.gdse.springboot.back_end.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {
    private String employeeCode;
    private String employeeName;
    private Gender gender;
    private String status;
    private String designation;
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
    private String employeePicture;
}
