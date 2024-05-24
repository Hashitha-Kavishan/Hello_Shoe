const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{2,}$/;
const JOIN_DATE_REGEX = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
const TOTAL_POINT_REGEX = /^[0-9]{1}$/;
const DOB_REGEX = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;;
const CUS_ADDRESS_LINE01_REGEX =  /^[A-Za-z0-9\s,.'-]{2,}$/;
const CUS_ADDRESS_LINE02_REGEX = /^[A-Za-z]{2,}$/;
const CUS_ADDRESS_LINE03_REGEX = /^[A-Za-z]{2,}$/;
const CUS_ADDRESS_LINE04_REGEX = /^[A-Za-z]{2,}$/;
const CUS_ADDRESS_LINE05_REGEX = /^[A-Za-z]{2,}$/;
const CUS_CONTACT_REGEX = /^[0-9]{10}$/;
const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const PURCHASE_DATE_REGEX =/^([0-9]{2}\/){2}\d{4}\s[0-2][0-9]\:[0-6][0-9]\s(pm|am)$/;

let customerArray = new Array();

customerArray.push({field:$("#txtCustomerCode"), regEx:CUS_ID_REGEX});
customerArray.push({field:$("#txtCustomerName"), regEx:CUS_NAME_REGEX});
customerArray.push({field:$("#txtTotalPoint"), regEx:TOTAL_POINT_REGEX});
customerArray.push({field:$("#txtAddressLine01"), regEx:CUS_ADDRESS_LINE01_REGEX});
customerArray.push({field:$("#txtAddressLine02"), regEx:CUS_ADDRESS_LINE02_REGEX});
customerArray.push({field:$("#txtAddressLine03"), regEx:CUS_ADDRESS_LINE03_REGEX});
customerArray.push({field:$("#txtAddressLine04"), regEx:CUS_ADDRESS_LINE04_REGEX});
customerArray.push({field:$("#txtAddressLine05"), regEx:CUS_ADDRESS_LINE05_REGEX});
customerArray.push({field:$("#txtContactNo"), regEx:CUS_CONTACT_REGEX});
customerArray.push({field:$("#txtEmail"), regEx:EMAIL_REGEX});

function clearCustomerInputField(){
    $("#txtCustomerCode,#txtCustomerName,#txtJoinDate,#txtTotalPoint,#txtDOB,#txtAddressLine01,#txtAddressLine02,#txtAddressLine03,#txtAddressLine04,#txtAddressLine05,#txtContactNo,#txtEmail,#txtPurchaseDate").val("");
    $("#txtCustomerCode,#txtCustomerName,#txtJoinDate,#txtTotalPoint,#txtDOB,#txtAddressLine01,#txtAddressLine02,#txtAddressLine03,#txtAddressLine04,#txtAddressLine05,#txtContactNo,#txtEmail,#txtPurchaseDate").css('border','1px solid #ced4da');
    $("#txtCustomerCode").focus();
    setCustomerBtn();
}

setCustomerBtn();

$("#txtCustomerCode,#txtCustomerName,#txtJoinDate,#txtTotalPoint,#txtDOB,#txtAddressLine01,#txtAddressLine02,#txtAddressLine03,#txtAddressLine04,#txtAddressLine05,#txtContactNo,#txtEmail,#txtPurchaseDate").on("keydown keyup", function (e) {
    let indexNo = customerArray.indexOf(customerArray.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkCustomerValidation(customerArray[indexNo]);

    setCustomerBtn();

    if (e.key == "Enter") {

        if (e.target.id != customerArray[customerArray.length - 1].field.attr("id")) {
            if (checkCustomerValidation(customerArray[indexNo])) {
                customerArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkCustomerValidation(customerArray[indexNo])) {
                saveCustomer();
            }
        }
    }
});
function checkCustomerValidation(object) {
    if (object.regEx.test(object.field.val())) {
        setCustomerBorder(true, object);
        return true;
    }
    setCustomerBorder(false, object)
    return false;
}
function setCustomerBorder(bol,object){
    if(!bol){
        if (object.field.val().length >= 1) {
            object.field.css("border", "2px solid red");
        } else {
            object.field.css("border", "1px solid #ced4da");
        }
    }
    else {
        if (object.field.val().length >= 1) {
            object.field.css("border", "2px solid green");
        } else {
            object.field.css("border", "1px solid #ced4da");
        }
    }
}
function checkCustomerAll(){
    for (let i = 0; i < customerArray.length; i++) {
        if(!checkCustomerValidation(customerArray[i])) return  false;
    }
    return true
}
function setCustomerBtn(){
    $("#btnCustomerUpdate").prop("disabled", true);
    $("#btnCustomerDelete").prop("disabled", true);

    if (checkCustomerAll()){
        $("#btnSaveCustomer").prop("disabled", false);
    }
    else {
        $("#btnSaveCustomer").prop("disabled", true);
    }

    let id = $("#txtCustomerCode").val();
    if (searchCustomer(id) == undefined) {
        $("#btnCustomerDelete").prop("disabled", true);
        $("#btnCustomerUpdate").prop("disabled", true);
    } else {
        $("#btnCustomerDelete").prop("disabled", false);
        $("#btnCustomerUpdate").prop("disabled", false);
    }
}