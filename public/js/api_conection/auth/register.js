let token = localStorage.getItem('token');
let request_register = function request_register(e){
    let button = $(this);

    let form = $(button.closest('form'));

    data = {
        username: $('#username').val().toLowerCase(),
        password: $('#password').val(),
        email:    $('#email').val().toLowerCase(),
        password_confirmation: $('#repeat-password').val()
    }
    console.log(data);
    $(document).ready(request(null, null, '/register', 'POST', data, function_succes, function_fail));
};

let function_succes = function function_succes(res){
    localStorage.setItem('username', $('#username').val());
    localStorage.setItem('token', res['token']);
    localStorage.setItem('user_id', res['user']['id']);
    window.location.replace('../projects/index.html');
};

let function_fail = function function_fail(res){
    console.log(res);
    let str = res["responseJSON"]["code"];
    console.log(str);
    if(str === "ER_DUP_ENTRY"){
        swal(
          'ERROR',
          'This email is already registered.',
          'error'
        );
    }
};

append_to_body(footer_code());
add_remaining_to_an_element();

if (token !== null){
    window.location.replace('../projects/index.html');
}
