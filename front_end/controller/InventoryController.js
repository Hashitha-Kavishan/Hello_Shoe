/*$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
$("#sale").css('display','none');*/

getAllInventories();


/*function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin").css('display','none');
}*/

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navInventory").click(function (){
    setView($("#inventory"))
});


let itemPicture=document.getElementById("itemPicture");
let inputItemPicture=document.getElementById("inputItemPicture");

inputItemPicture.onchange = function (){
    itemPicture.src=URL.createObjectURL(inputItemPicture.files[0])
}



$("#btnInventorySave").click(function (){
    let itemCode=$("#txtItemCode").val();
    let itemName=$("#txtItemName").val();

    let itemPicInput = $("#inputItemPicture").prop('files')[0];

    let category=$("#cmdItemCategory").val();
    let supplierCode=$("#txtSupplierCodeForItem").val();
    let supplierName=$("#txtSupplierNameForItem").val();
    let unitPriceSale=$("#txtUnitPriceSale").val();
    let unitPriceBuy=$("#txtUnitPriceBuy").val();
    let expectedProfit=$("#txtItemExpectedProfit").val();
    let profitMargin=$("#txtItemProfitMargin").val();
    let status=$("#txtItemStatus").val();
    let size5=$("#txtSize5Qty").val();
    let size6=$("#txtSize6Qty").val();
    let size7=$("#txtSize7Qty").val();
    let size8=$("#txtSize8Qty").val();
    let size9=$("#txtSize9Qty").val();
    let size10=$("#txtSize10Qty").val();
    let size11=$("#txtSize11Qty").val();

    let inventoryData=new FormData();
    inventoryData.append('itemCode',itemCode);
    inventoryData.append('itemDesc',itemName);
    inventoryData.append('itemPicture',itemPicInput);
    inventoryData.append('category',category);
    inventoryData.append('quantitySize5',size5);
    inventoryData.append('quantitySize6',size6);
    inventoryData.append('quantitySize7',size7);
    inventoryData.append('quantitySize8',size8);
    inventoryData.append('quantitySize9',size9);
    inventoryData.append('quantitySize10',size10);
    inventoryData.append('quantitySize11',size11);
    inventoryData.append('supplierCode',supplierCode);
    inventoryData.append('supplierName',supplierName);
    inventoryData.append('unitPriceSale',unitPriceSale);
    inventoryData.append('unitPriceBuy',unitPriceBuy);
    inventoryData.append('expectedProfit',expectedProfit);
    inventoryData.append('profitMargin',profitMargin);
    inventoryData.append('status',status);

    $.ajax({
        url:"http://localhost:8080/app/api/v1/inventories",
        method:"POST",
        data: inventoryData,
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("Added inventory successfully");
            }
            getAllInventories();
        },
        error: function (error){
            console.log("Error",error);
        }
    });
});

$("#btnInventoryUpdate").click(function (){
    let itemCode=$("#txtItemCode").val();
    let itemName=$("#txtItemName").val();

    let itemPicInput = $("#inputItemPicture").prop('files')[0];

    let category=$("#cmdItemCategory").val();
    let supplierCode=$("#txtSupplierCodeForItem").val();
    let supplierName=$("#txtSupplierNameForItem").val();
    let unitPriceSale=$("#txtUnitPriceSale").val();
    let unitPriceBuy=$("#txtUnitPriceBuy").val();
    let expectedProfit=$("#txtItemExpectedProfit").val();
    let profitMargin=$("#txtItemProfitMargin").val();
    let status=$("#txtItemStatus").val();
    let size5=$("#txtSize5Qty").val();
    let size6=$("#txtSize6Qty").val();
    let size7=$("#txtSize7Qty").val();
    let size8=$("#txtSize8Qty").val();
    let size9=$("#txtSize9Qty").val();
    let size10=$("#txtSize10Qty").val();
    let size11=$("#txtSize11Qty").val();

    let inventoryData=new FormData();
    inventoryData.append('itemCode',itemCode);
    inventoryData.append('itemDesc',itemName);
    inventoryData.append('itemPicture',itemPicInput);
    inventoryData.append('category',category);
    inventoryData.append('quantitySize5',size5);
    inventoryData.append('quantitySize6',size6);
    inventoryData.append('quantitySize7',size7);
    inventoryData.append('quantitySize8',size8);
    inventoryData.append('quantitySize9',size9);
    inventoryData.append('quantitySize10',size10);
    inventoryData.append('quantitySize11',size11);
    inventoryData.append('supplierCode',supplierCode);
    inventoryData.append('supplierName',supplierName);
    inventoryData.append('unitPriceSale',unitPriceSale);
    inventoryData.append('unitPriceBuy',unitPriceBuy);
    inventoryData.append('expectedProfit',expectedProfit);
    inventoryData.append('profitMargin',profitMargin);
    inventoryData.append('status',status);

    $.ajax({
        url:"http://localhost:8080/app/api/v1/inventories",
        method:"PATCH",
        data: inventoryData,
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("Added inventory successfully");
            }
            getAllInventories();
        },
        error: function (error){
            console.log("Error",error);
        }
    });
});

$("#btnInventoryDelete").click(function (){
    let itemCode=$("#txtItemCode").val();

    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories/" + itemCode,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                alert("Delete inventory successfully");
            }
            getAllInventories();
        },
        error: function (error) {

        }
    });
});

function getAllInventories(){
    $("#tblInventories").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            for (const inventory of resp) {
                let row=`<tr>
                    <td>${inventory.itemCode}</td>
                    <td><img alt="image" src="data:image/png;base64,${inventory.itemPicture}" style="max-width: 50px; height: 50px; border-radius: 10px;"></td>
                    <td>${inventory.itemDesc}</td>
                    <td>${inventory.category}</td>
                    <td>${inventory.quantitySize5}</td>
                    <td>${inventory.quantitySize6}</td>
                    <td>${inventory.quantitySize7}</td>
                    <td>${inventory.quantitySize8}</td>
                    <td>${inventory.quantitySize9}</td>
                    <td>${inventory.quantitySize10}</td>
                    <td>${inventory.quantitySize11}</td>
                    <td>${inventory.supplierCode}</td>
                    <td>${inventory.supplierName}</td>
                    <td>${inventory.unitPriceSale}</td>
                    <td>${inventory.unitPriceBuy}</td>
                    <td>${inventory.expectedProfit}</td>
                    <td>${inventory.profitMargin}</td>
                    <td>${inventory.status}</td>
                </tr>`;
                $("#tblInventories").append(row);
                bindInventoryTrEvents();
            }
        }
    });
}

function bindInventoryTrEvents() {
    $("#tblInventories>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(2).text();
        let category = $(this).children().eq(3).text();
        let quantitySize5 = $(this).children().eq(4).text();
        let quantitySize6 = $(this).children().eq(5).text();
        let quantitySize7 = $(this).children().eq(6).text();
        let quantitySize8 = $(this).children().eq(7).text();
        let quantitySize9 = $(this).children().eq(8).text();
        let quantitySize10 = $(this).children().eq(9).text();
        let quantitySize11 = $(this).children().eq(10).text();
        let supplierCode = $(this).children().eq(11).text();
        let supplierName = $(this).children().eq(12).text();
        let unitPriceSale = $(this).children().eq(13).text();
        let unitPriceBuy = $(this).children().eq(14).text();
        let expectedProfit = $(this).children().eq(15).text();
        let profitMargin = $(this).children().eq(16).text();
        let status = $(this).children().eq(17).text();

        $("#txtItemCode").val(code)
        $("#txtItemName").val(name)
        $("#cmdItemCategory").val(category)
        $("#txtSize5Qty").val(quantitySize5)
        $("#txtSize6Qty").val(quantitySize6)
        $("#txtSize7Qty").val(quantitySize7)
        $("#txtSize8Qty").val(quantitySize8)
        $("#txtSize9Qty").val(quantitySize9)
        $("#txtSize10Qty").val(quantitySize10)
        $("#txtSize11Qty").val(quantitySize11)
        $("#txtSupplierCodeForItem").val(supplierCode)
        $("#txtSupplierNameForItem").val(supplierName)
        $("#txtUnitPriceSale").val(unitPriceSale)
        $("#txtUnitPriceBuy").val(unitPriceBuy)
        $("#txtItemExpectedProfit").val(expectedProfit)
        $("#txtItemProfitMargin").val(profitMargin)
        $("#txtItemStatus").val(status)

        uploadItemPicture(code);
    });
}
function uploadItemPicture(code){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories/"+code,
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {

            let base64Image =resp.itemPicture;
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

            inputItemPicture.files = dataTransfer.files;

            // Create an object URL for the blob
            itemPicture.src = URL.createObjectURL(blob);

        },
    });
}
