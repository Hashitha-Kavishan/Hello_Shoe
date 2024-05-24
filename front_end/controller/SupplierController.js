/*$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
$("#sale").css('display','none');*/


let supplierCodes = [];
getAllSupplier();
/*function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin").css('display','none');
}*/

function setSupplierView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navSupplier").click(function (){
    setSupplierView($("#supplier"))
});

$("#btnSaveSupplier").click(function (){
  saveSupplier();
    clearSupplierInputField();
});

$("#btnSupplirUpdate").click(function (){
    updateSupplier();
    clearSupplierInputField();
});

$("#btnSupplierDelete").click(function (){
    deleteSupplier();
    clearSupplierInputField();
});

function saveSupplier(){
    let supplierCode=$("#txtSupplierCode").val();
    let supplierName=$("#txtSupplierName").val();
    let category=$("#txtSupplierCategory").val();
    let addressLine1=$("#txtSupplierAddress1").val();
    let addressLine2=$("#txtSupplierAddress2").val();
    let addressLine3=$("#txtSupplierAddress3").val();
    let addressLine4=$("#txtSupplierAddress4").val();
    let addressLine5=$("#txtSupplierAddress5").val();
    let addressLine6=$("#txtSupplierAddress6").val();
    let contactNo1=$("#txtSupplierContactNo1").val();
    let contactNo2=$("#txtSupplierContactNo2").val();
    let email=$("#txtSupplierEmail").val();

    let newSupplier={
        supplierCode:supplierCode,
        supplierName:supplierName,
        category:category,
        addressLine01:addressLine1,
        addressLine02:addressLine2,
        addressLine03:addressLine3,
        addressLine04:addressLine4,
        addressLine05:addressLine5,
        addressLine06:addressLine6,
        contactNo1:contactNo1,
        contactNo2:contactNo2,
        email:email
    }
    const jsonObject=JSON.stringify(newSupplier);
    $.ajax({
        url:"http://localhost:8080/app/api/v1/suppliers",
        method:"POST",
        data:jsonObject,
        contentType:("application/json"),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("Added supplier successfully");
            }
            getAllSupplier();
        },
        error: function (error){
            console.log("Error",error);
        }
    });
}

function updateSupplier(){
    let supplierCode=$("#txtSupplierCode").val();
    let supplierName=$("#txtSupplierName").val();
    let category=$("#txtSupplierCategory").val();
    let addressLine1=$("#txtSupplierAddress1").val();
    let addressLine2=$("#txtSupplierAddress2").val();
    let addressLine3=$("#txtSupplierAddress3").val();
    let addressLine4=$("#txtSupplierAddress4").val();
    let addressLine5=$("#txtSupplierAddress5").val();
    let addressLine6=$("#txtSupplierAddress6").val();
    let contactNo1=$("#txtSupplierContactNo1").val();
    let contactNo2=$("#txtSupplierContactNo2").val();
    let email=$("#txtSupplierEmail").val();

    let newSupplier={
        supplierCode:supplierCode,
        supplierName:supplierName,
        category:category,
        addressLine01:addressLine1,
        addressLine02:addressLine2,
        addressLine03:addressLine3,
        addressLine04:addressLine4,
        addressLine05:addressLine5,
        addressLine06:addressLine6,
        contactNo1:contactNo1,
        contactNo2:contactNo2,
        email:email
    }
    const jsonObject=JSON.stringify(newSupplier);
    $.ajax({
        url:"http://localhost:8080/app/api/v1/suppliers",
        method:"PATCH",
        data:jsonObject,
        contentType:("application/json"),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("Added supplier successfully");
            }
            getAllSupplier();
        },
        error: function (error){
            console.log("Error",error);
        }
    });
}

function deleteSupplier(){
    let supplierCode=$("#txtSupplierCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/suppliers/" + supplierCode,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                alert("Delete supplier successfully");
            }
            getAllSupplier();
        },
        error: function (error) {

        }
    });
}

function searchSupplier(id){
    return supplierCodes.find(function (supplier){
        return supplier.id==id;
    });
};

function getAllSupplier(){
    $("#tblSupplier").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/suppliers",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            for (const supplier of resp) {
                let row=`<tr>
                    <td>${supplier.supplierCode}</td>
                    <td>${supplier.supplierName}</td>
                    <td>${supplier.category}</td>
                    <td>${supplier.addressLine01+","+supplier.addressLine02+","+supplier.addressLine03+","+supplier.addressLine04+","+supplier.addressLine05+","+supplier.addressLine06+"."}</td>
                    <td>${supplier.contactNo1}</td>
                    <td>${supplier.contactNo2}</td>
                    <td>${supplier.email}</td>
                </tr>`;
                $("#tblSupplier").append(row);
                bindSupplierTrEvents();
                const supplierDetails = {
                    id: supplier.supplierCode
                }
                supplierCodes.push(supplierDetails);
            }
        }
    });
}
function bindSupplierTrEvents() {
    $("#tblSupplier>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let category = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let arr = address.split(",");
        let addressLine01 = arr[0];
        let addressLine02 = arr[1];
        let addressLine03 = arr[2];
        let addressLine04 = arr[3];
        let addressLine05 = arr[4];
        let addressLine06 = arr[5];
        let contact01 = $(this).children().eq(4).text();
        let contact02 = $(this).children().eq(5).text();
        let email = $(this).children().eq(6).text();

        $("#txtSupplierCode").val(code)
        $("#txtSupplierName").val(name)
        $("#txtSupplierCategory").val(category)
        $("#txtSupplierAddress1").val(addressLine01)
        $("#txtSupplierAddress2").val(addressLine02)
        $("#txtSupplierAddress3").val(addressLine03)
        $("#txtSupplierAddress4").val(addressLine04)
        $("#txtSupplierAddress5").val(addressLine05)
        $("#txtSupplierAddress6").val(addressLine06)
        $("#txtSupplierContactNo1").val(contact01)
        $("#txtSupplierContactNo2").val(contact02)
        $("#txtSupplierEmail").val(email)
    });
}