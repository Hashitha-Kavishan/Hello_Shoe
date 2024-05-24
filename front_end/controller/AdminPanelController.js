/*$("#admin").css('display','block');

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale").css('display','none');
}*/

function setDashboardView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navDashboard").click(function (){
    setDashboardView($("#admin"))
});

function setMostSellItem(){

}