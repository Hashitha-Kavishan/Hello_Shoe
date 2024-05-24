/*$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
$("#sale").css('display','none');
$("#admin").css('display','none');*/
getAllEmployee()

/*function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin").css('display','none');
}*/

function setEmployeeView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navEmployee").click(function (){
    setEmployeeView($("#employee"))
});

let profilePic=document.getElementById("profilePic")
let inputFile=document.getElementById("inputFile")

inputFile.onchange = function (){
    profilePic.src=URL.createObjectURL(inputFile.files[0])
}

$("#btnEmployeeSave").click(function (){
   saveEmployee();
});

$("#btnEmployeeUpdate").click(function (){
    updateEmployee();
});

$("#btnEmployeeDelete").click(function (){
    deleteEmployee();
});

function saveEmployee(){
    let employeeCode=$("#txtEmployeeCode").val();
    let employeeName=$("#txtEmployeeName").val();
    let proPic = $("#inputFile").prop('files')[0];
    let employeeGender=$("#employeeGender").val();
    let employeeStatus=$("#txtEmployeeStatus").val();
    let employeeDesignation=$("#txtEmployeeDesignation").val();
    let employeeAccessRole=$("#txtEmployeeAccessRole").val();
    let employeeDOB=$("#txtEmployeeDOB").val();
    let employeeDateOfJoin=$("#txtEmployeeDateOfJoin").val();
    let employeeAttachedBranch=$("#txtEmployeeAttachedBranch").val();
    let employeeAddressLine1=$("#txtEmployeeAddressLine1").val();
    let employeeAddressLine2=$("#txtEmployeeAddressLine2").val();
    let employeeAddressLine3=$("#txtEmployeeAddressLine3").val();
    let employeeAddressLine4=$("#txtEmployeeAddressLine4").val();
    let employeeAddressLine5=$("#txtEmployeeAddressLine5").val();
    let employeeContactNo=$("#txtEmployeeContactNo").val();
    let employeeEmail=$("#txtEmployeeEmail").val();
    let employeeCaseOfEmergency=$("#txtEmployeeCaseOfEmergency").val();
    let employeeEmergencyContact=$("#txtEmployeeEmergencyContact").val();

    var formData = new FormData();
    formData.append('employeeCode',employeeCode);
    formData.append('employeeName',employeeName);
    formData.append('gender',employeeGender);
    formData.append('status',employeeStatus);
    formData.append('designation',employeeDesignation);
    formData.append('accessRole',employeeAccessRole);
    formData.append('dob',employeeDOB);
    formData.append('dateOfJoin',employeeDateOfJoin);
    formData.append('attachedBranch',employeeAttachedBranch);
    formData.append('addressLine01',employeeAddressLine1);
    formData.append('addressLine02',employeeAddressLine2);
    formData.append('addressLine03',employeeAddressLine3);
    formData.append('addressLine04',employeeAddressLine4);
    formData.append('addressLine05',employeeAddressLine5);
    formData.append('contactNo',employeeContactNo);
    formData.append('email',employeeEmail);
    formData.append('informInCaseOfEmergency',employeeCaseOfEmergency);
    formData.append('emergencyContact',employeeEmergencyContact);
    formData.append('employeePicture',proPic);

    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr) {
            console.log("Success", resp);
            if (jqxhr.status == 201) {
                alert("Added employee successfully");
            }
            getAllEmployee();
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
}

function updateEmployee(){
    let employeeCode=$("#txtEmployeeCode").val();
    let employeeName=$("#txtEmployeeName").val();
    let proPic = $("#inputFile").prop('files')[0];
    let employeeGender=$("#employeeGender").val();
    let employeeStatus=$("#txtEmployeeStatus").val();
    let employeeDesignation=$("#txtEmployeeDesignation").val();
    let employeeAccessRole=$("#txtEmployeeAccessRole").val();
    let employeeDOB=$("#txtEmployeeDOB").val();
    let employeeDateOfJoin=$("#txtEmployeeDateOfJoin").val();
    let employeeAttachedBranch=$("#txtEmployeeAttachedBranch").val();
    let employeeAddressLine1=$("#txtEmployeeAddressLine1").val();
    let employeeAddressLine2=$("#txtEmployeeAddressLine2").val();
    let employeeAddressLine3=$("#txtEmployeeAddressLine3").val();
    let employeeAddressLine4=$("#txtEmployeeAddressLine4").val();
    let employeeAddressLine5=$("#txtEmployeeAddressLine5").val();
    let employeeContactNo=$("#txtEmployeeContactNo").val();
    let employeeEmail=$("#txtEmployeeEmail").val();
    let employeeCaseOfEmergency=$("#txtEmployeeCaseOfEmergency").val();
    let employeeEmergencyContact=$("#txtEmployeeEmergencyContact").val();

    let employeeFormData = new FormData();
    employeeFormData.append('employeeCode',employeeCode);
    employeeFormData.append('employeeName',employeeName);
    employeeFormData.append('gender',employeeGender);
    employeeFormData.append('status',employeeStatus);
    employeeFormData.append('designation',employeeDesignation);
    employeeFormData.append('accessRole',employeeAccessRole);
    employeeFormData.append('dob',employeeDOB);
    employeeFormData.append('dateOfJoin',employeeDateOfJoin);
    employeeFormData.append('attachedBranch',employeeAttachedBranch);
    employeeFormData.append('addressLine01',employeeAddressLine1);
    employeeFormData.append('addressLine02',employeeAddressLine2);
    employeeFormData.append('addressLine03',employeeAddressLine3);
    employeeFormData.append('addressLine04',employeeAddressLine4);
    employeeFormData.append('addressLine05',employeeAddressLine5);
    employeeFormData.append('contactNo',employeeContactNo);
    employeeFormData.append('email',employeeEmail);
    employeeFormData.append('informInCaseOfEmergency',employeeCaseOfEmergency);
    employeeFormData.append('emergencyContact',employeeEmergencyContact);
    employeeFormData.append('employeePicture',proPic);

    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "PATCH",
        data: employeeFormData,
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr) {
            console.log("Success", resp);
            if (jqxhr.status == 201) {
                alert("Added employee successfully");
            }
            getAllCustomers();
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
}

function deleteEmployee(){
    let employeeCode=$("#txtEmployeeCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees/" + employeeCode,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                alert("Delete employee successfully");
            }
            getAllCustomers();
        },
        error: function (error) {

        }
    });
}

function getAllEmployee(){
    $("#tblEmployee").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            for (const employee of resp) {
                let row=`<tr>
                    <td>${employee.employeeCode}</td>
                    <td><img alt="image" src="data:image/png;base64,${employee.employeePicture}" style="max-width: 50px; height: 50px; border-radius: 50px; "></td>
                    <td>${employee.employeeName}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.status}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.accessRole}</td>
                    <td>${employee.dob}</td>
                    <td>${employee.dateOfJoin}</td>
                    <td>${employee.attachedBranch}</td>
                    <td>${employee.addressLine01+","+employee.addressLine02+","+employee.addressLine03+","+employee.addressLine04+","+employee.addressLine05+"."}</td>
                    <td>${employee.contactNo}</td>
                    <td>${employee.email}</td>
                    <td>${employee.informInCaseOfEmergency}</td>
                    <td>${employee.emergencyContact}</td>
                </tr>`;
                $("#tblEmployee").append(row);
                bindEmployeeTrEvents();
            }
        }
    });
}

function bindEmployeeTrEvents() {
    $("#tblEmployee>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let picture = $(this).children().eq(1).text();
        let name = $(this).children().eq(2).text();
        let gender = $(this).children().eq(3).text();
        let status = $(this).children().eq(4).text();
        let designation = $(this).children().eq(5).text();
        let accessRole = $(this).children().eq(6).text();
        let DOB = $(this).children().eq(7).text();
        let dateOfJoin = $(this).children().eq(8).text();
        let attachedBranch = $(this).children().eq(9).text();
        let address = $(this).children().eq(10).text();
        let arr = address.split(",");
        let addressLine01 = arr[0];
        let addressLine02 = arr[1];
        let addressLine03 = arr[2];
        let addressLine04 = arr[3];
        let addressLine05 = arr[4];
        let contact = $(this).children().eq(11).text();
        let email = $(this).children().eq(12).text();
        let caseOfEmergency = $(this).children().eq(13).text();
        let emergencyContact = $(this).children().eq(14).text();

        $("#txtEmployeeCode").val(code)
        $("#txtEmployeeName").val(name)
        $("#txtEmployeeStatus").val(status)
        $("#txtEmployeeDesignation").val(designation)
        $("#txtEmployeeAccessRole").val(accessRole)
        $("#txtEmployeeAttachedBranch").val(attachedBranch)
        $("#txtEmployeeDOB").val(DOB)
        $("#txtEmployeeDateOfJoin").val(dateOfJoin)
        $("#txtEmployeeAddressLine1").val(addressLine01)
        $("#txtEmployeeAddressLine2").val(addressLine02)
        $("#txtEmployeeAddressLine3").val(addressLine03)
        $("#txtEmployeeAddressLine4").val(addressLine04)
        $("#txtEmployeeAddressLine5").val(addressLine05)
        $("#txtEmployeeContactNo").val(contact)
        $("#txtEmployeeEmail").val(email)
        $("#txtEmployeeCaseOfEmergency").val(caseOfEmergency)
        $("#txtEmployeeEmergencyContact").val(emergencyContact)

       uploadProfilePicture(code);

    });
}

function uploadProfilePicture(code){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees/"+code,
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {

            let base64Image =resp.employeePicture;
            console.log(base64Image)

            // Decode Base64 string to binary
            let binaryData = atob(base64Image);
            console.log(binaryData)

            // Convert binary data to an array buffer
            let arrayBuffer = new ArrayBuffer(binaryData.length);
            let uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryData.length; i++) {
                uint8Array[i] = binaryData.charCodeAt(i);
            }

            // Create a Blob from the array buffer
            let blob = new Blob([uint8Array], { type: 'image/jpeg, image/png,image/jpg' }); // Change the MIME type accordingly

            let file = new File([blob], 'image.png', { type: 'image/png' });

            let dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            inputFile.files = dataTransfer.files;
            // Create an object URL for the blob
            profilePic.src = URL.createObjectURL(blob);
        },
    });
}
