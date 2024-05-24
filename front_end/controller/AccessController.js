if(localStorage.getItem("access")==="ADMIN"){
    $("#customer,#supplier,#employee,#inventory,#sale,#header").css('display','block');
    $("#navDashboard").css('display','none');
}

if(localStorage.getItem("access")==="USER"){
    $("#customer,#supplier,#employee,#inventory,#sale,#header").css('display','block');
    $("#navDashboard").css('display','none');
}