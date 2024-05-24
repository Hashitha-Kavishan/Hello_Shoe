const SUPPLIER_ID_REGEX = /^(S00-)[0-9 ]{3}$/;
const SUPPLIER_NAME_REGEX = /^[A-Za-z ]{2,}$/;
const CATEGORY_REGEX = /^[A-Za-z0-9 ]{1,}$/;
const SUPPLIER_ADDRESS_LINE01_REGEX =  /^[A-Za-z0-9\s,.'-]{2,}$/;
const SUPPLIER_ADDRESS_LINE02_REGEX = /^[A-Za-z ]{2,}$/;
const SUPPLIER_ADDRESS_LINE03_REGEX = /^[A-Za-z ]{2,}$/;
const SUPPLIER_ADDRESS_LINE04_REGEX = /^[A-Za-z ]{2,}$/;
const SUPPLIER_ADDRESS_LINE05_REGEX = /^[A-Za-z ]{2,}$/;
const SUPPLIER_ADDRESS_LINE06_REGEX = /^[A-Za-z ]{2,}$/;
const SUPPLIER_CONTACT1_REGEX = /^[0-9 ]{10}$/;
const SUPPLIER_CONTACT2_REGEX = /^[0-9 ]{10}$/;
const SUPPLIER_EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z ]{2,}$/;

let supplierArray = new Array();

supplierArray.push({field:$("#txtSupplierCode"), regEx:SUPPLIER_ID_REGEX});
supplierArray.push({field:$("#txtSupplierName"), regEx:SUPPLIER_NAME_REGEX});
supplierArray.push({field:$("#txtSupplierCategory"), regEx:CATEGORY_REGEX});
supplierArray.push({field:$("#txtSupplierAddress1"), regEx:SUPPLIER_ADDRESS_LINE01_REGEX});
supplierArray.push({field:$("#txtSupplierAddress2"), regEx:SUPPLIER_ADDRESS_LINE02_REGEX});
supplierArray.push({field:$("#txtSupplierAddress3"), regEx:SUPPLIER_ADDRESS_LINE03_REGEX});
supplierArray.push({field:$("#txtSupplierAddress4"), regEx:SUPPLIER_ADDRESS_LINE04_REGEX});
supplierArray.push({field:$("#txtSupplierAddress5"), regEx:SUPPLIER_ADDRESS_LINE05_REGEX});
supplierArray.push({field:$("#txtSupplierAddress6"), regEx:SUPPLIER_ADDRESS_LINE06_REGEX});
supplierArray.push({field:$("#txtSupplierContactNo1"), regEx:SUPPLIER_CONTACT1_REGEX});
supplierArray.push({field:$("#txtSupplierContactNo2"), regEx:SUPPLIER_CONTACT2_REGEX});
supplierArray.push({field:$("#txtSupplierEmail"), regEx:SUPPLIER_EMAIL_REGEX});

function clearSupplierInputField(){
    $("#txtSupplierCode,#txtSupplierName,#txtSupplierCategory,#txtSupplierAddress1,#txtSupplierAddress2,#txtSupplierAddress3,#txtSupplierAddress4,#txtSupplierAddress5,#txtSupplierAddress6,#txtSupplierContactNo1,#txtSupplierContactNo2,#txtSupplierEmail").val("");
    $("#txtSupplierCode,#txtSupplierName,#txtSupplierCategory,#txtSupplierAddress1,#txtSupplierAddress2,#txtSupplierAddress3,#txtSupplierAddress4,#txtSupplierAddress5,#txtSupplierAddress6,#txtSupplierContactNo1,#txtSupplierContactNo2,#txtSupplierEmail").css('border','1px solid #ced4da');
    $("#txtSupplierCode").focus();
    setSupplierBtn();
}

setSupplierBtn();

$("#txtSupplierCode,#txtSupplierName,#txtSupplierCategory,#txtSupplierAddress1,#txtSupplierAddress2,#txtSupplierAddress3,#txtSupplierAddress4,#txtSupplierAddress5,#txtSupplierAddress6,#txtSupplierContactNo1,#txtSupplierContactNo2,#txtSupplierEmail").on("keydown keyup", function (e) {
    let indexNo = supplierArray.indexOf(supplierArray.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkSupplierValidation(supplierArray[indexNo]);

    setSupplierBtn();

    if (e.key == "Enter") {

        if (e.target.id != supplierArray[supplierArray.length - 1].field.attr("id")) {
            if (checkSupplierValidation(supplierArray[indexNo])) {
                supplierArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkSupplierValidation(supplierArray[indexNo])) {
                saveSupplier();
            }
        }
    }
});
function checkSupplierValidation(object) {
    if (object.regEx.test(object.field.val())) {
        setSupplierBorder(true, object);
        return true;
    }
    setSupplierBorder(false, object)
    return false;
}
function setSupplierBorder(bol,object){
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
function checkSupplierAll(){
    for (let i = 0; i < supplierArray.length; i++) {
        if(!checkSupplierValidation(supplierArray[i])) return  false;
    }
    return true
}
function setSupplierBtn(){
    $("#btnSupplirUpdate").prop("disabled", true);
    $("#btnSupplierDelete").prop("disabled", true);

    if (checkSupplierAll()){
        $("#btnSaveSupplier").prop("disabled", false);
    }
    else {
        $("#btnSaveSupplier").prop("disabled", true);
    }

    let id = $("#txtSupplierCode").val();
    if (searchSupplier(id) == undefined) {
        $("#btnSupplierDelete").prop("disabled", true);
        $("#btnSupplirUpdate").prop("disabled", true);
    } else {
        $("#btnSupplierDelete").prop("disabled", false);
        $("#btnSupplirUpdate").prop("disabled", false);
    }
}