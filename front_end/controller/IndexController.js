$("#btnHome").click(function () {
    $("#dashboard").css('display' , 'block');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'none');
});

$("#btnItems").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'block');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'none');
});

$("#btnSupplier").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'block');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'none');
});

$("#btnCusotmer").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'block');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'none');

});

$("#btnStaff").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'block');
    $("#orderPage").css('display', 'none');
});

$("#btnOrderPage").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'none');
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'block');
});


$("#btnOrder").click(function () {
    $("#dashboard").css('display' , 'none');
    $("#supplier").css('display', 'none');
    $("#items").css('display', 'none');
    $("#customer").css('display', 'none');
    $("#order").css('display', 'block');
    generateOrderID();
    $('#orderDate').val(generateDate());
    $("#staff").css('display', 'none');
    $("#orderPage").css('display', 'none');


});


function generateDate() {

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date = new Date()) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }

    return formatDate();
}

function loadAllOrderHistory() {
    $('#tblOrderHistory').empty();
    for (var ord of order) {
        var row = `<tr><td>${ord.oderId}</td><td>${ord.orderQty}</td><td>${ord.oderValue}</td><td>${ord.oderCustomer}</td><td>${ord.oderDate}</td></tr>`;
        $('#tblOrderHistory').append(row);
    }
    ordersCard();
}

function ordersCard(){
    $("#cdOrdersCount").text(order.length);
}

function itemsCard() {
    $("#cdItemsCount").text(items.length);
}

function customersCard() {
    $("#cdCustCount").text(customers.length);
}