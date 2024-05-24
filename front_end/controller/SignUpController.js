

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin,#header#log-in-page,#sign-up-page").css('display','none');
}

$("#btnSignUpToApp").click(function () {

    let email= $("#txtSignUpEmail").val();
    let password= $("#txtPasswordSignUpEmail").val();
    let name= $("#txtNameSignUpEmail").val();
    let role= $("#cmdAccessRole").val();

    let signUpObj = {
        email:email,
        name:name,
        password:password,
        role:role
    }

    console.log(signUpObj)

    const jsonObj = JSON.stringify(signUpObj)

    $.ajax({
        url: "http://localhost:8080/app/api/v1/auth/signUp",
        method: "POST",
        data: jsonObj,
        contentType: "application/json",
        success: function (resp, textStatus, jqxhr) {
            console.log("signUp success: ", resp);
            localStorage.setItem("token", resp.token)
            clearSignUpInputFields();
            swal("SignUp", "Sign up successfully", "success");
            $("#sale").css('display','block');
        },
        error: function (xhr, textStatus, error) {
            console.log("signUp error: ", error);
            console.log("signUp error: ", xhr);
            if (xhr.status===409){
                swal("Error", "This User is already exits!", "error");
            }
            if (xhr.status===404){
                swal("Error", "No Employee can be found this email!", "error");
            }
        }
    })
});

function clearSignUpInputFields() {
    $("#cmbSignUpRole").prop("selectedIndex", "USER");
    $("#txtSignUpEmail").val("");
    $("#txtSignUpFirstName").val("");
    $("#txtSignUpLastName").val("");
    $("#txtSignUpPassword").val("");
    $("#txtSignUpConfirmPassword").val("");
}
