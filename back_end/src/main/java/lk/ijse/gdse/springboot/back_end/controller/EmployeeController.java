package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.EmployeeDTO;
import lk.ijse.gdse.springboot.back_end.service.EmployeeService;
import lk.ijse.gdse.springboot.back_end.util.Gender;
import lk.ijse.gdse.springboot.back_end.util.Role;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin
public class EmployeeController {
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE)
    public List<EmployeeDTO> getAllEmployees(){
        return employeeService.getAllEmployee();
    }

    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public EmployeeDTO getEmployeeDetails(@PathVariable("id") String id){
        return employeeService.getEmployeeDetails(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void saveEmployee(@RequestParam("employeeCode") String code,
                             @RequestParam("employeeName") String name,
                             @RequestParam("gender")Gender gender,
                             @RequestParam("status") String status,
                             @RequestParam("designation") String designation,
                             @RequestParam("accessRole") Role role,
                             @RequestParam("dob") String dob,
                             @RequestParam("dateOfJoin") String dateOfJoin,
                             @RequestParam("attachedBranch") String attachedBranch,
                             @RequestParam("addressLine01") String addressLine1,
                             @RequestParam("addressLine02") String addressLine2,
                             @RequestParam("addressLine03") String addressLine3,
                             @RequestParam("addressLine04") String addressLine4,
                             @RequestParam("addressLine05") String addressLine5,
                             @RequestParam("contactNo") String contact,
                             @RequestParam("email") String email,
                             @RequestParam("informInCaseOfEmergency") String informInCaseOfEmergency,
                             @RequestParam("emergencyContact") String emergencyContact,
                             @RequestParam("employeePicture") MultipartFile profilrPic
                             ) throws IOException, ParseException {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date newDob = dateFormat.parse(dob);
        Date newJoinOfDate = dateFormat.parse(dob);
        String base64ProfilePic = Base64.getEncoder().encodeToString(profilrPic.getBytes());
        EmployeeDTO employeeDTO = new EmployeeDTO(code, name, gender, status, designation,role, newDob, newJoinOfDate, attachedBranch,
                addressLine1, addressLine2, addressLine3, addressLine4, addressLine5, contact, email, informInCaseOfEmergency, emergencyContact,base64ProfilePic);
        employeeService.saveEmployee(employeeDTO);
    }

    @PatchMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void updateEmployee(@RequestParam("employeeCode") String code,
                               @RequestParam("employeeName") String name,
                               @RequestParam("gender")Gender gender,
                               @RequestParam("status") String status,
                               @RequestParam("designation") String designation,
                               @RequestParam("accessRole") Role role,
                               @RequestParam("dob") String dob,
                               @RequestParam("dateOfJoin") String dateOfJoin,
                               @RequestParam("attachedBranch") String attachedBranch,
                               @RequestParam("addressLine01") String addressLine1,
                               @RequestParam("addressLine02") String addressLine2,
                               @RequestParam("addressLine03") String addressLine3,
                               @RequestParam("addressLine04") String addressLine4,
                               @RequestParam("addressLine05") String addressLine5,
                               @RequestParam("contactNo") String contact,
                               @RequestParam("email") String email,
                               @RequestParam("informInCaseOfEmergency") String informInCaseOfEmergency,
                               @RequestParam("emergencyContact") String emergencyContact,
                               @RequestParam("employeePicture") MultipartFile profilrPic
                                ) throws IOException, ParseException {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date newDob = dateFormat.parse(dob);
        Date newJoinOfDate = dateFormat.parse(dob);
        String base64ProfilePic = Base64.getEncoder().encodeToString(profilrPic.getBytes());
        EmployeeDTO employeeDTO = new EmployeeDTO(code, name, gender, status, designation,role, newDob, newJoinOfDate, attachedBranch, addressLine1,
                addressLine2, addressLine3, addressLine4, addressLine5, contact, email, informInCaseOfEmergency, emergencyContact,base64ProfilePic);
        employeeService.updateEmployee(employeeDTO);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void deleteEmployee(@PathVariable("id") String id){
        employeeService.deleteEmployee(id);
    }
}
