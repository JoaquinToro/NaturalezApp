$(document).ready(function(){
    var regiones = [];
    $.getJSON('datos/regiones.json', function(datos){
        regiones = datos;
        datos.forEach(elemento => {
            $("#region").append(`<option value="${elemento.nombre}">${elemento.nombre}</option>`);
        });
    });

    $("#region").on("change", function(){
        $('#comuna').find('option').remove().end().append('<option value="">Selecciona una comuna</option>');
        var region = $(this).val();
        if(region !== ""){
            regiones.forEach(elemento => {
                if(elemento.nombre === region){
                    elemento.comunas.forEach(comuna => {
                        $("#comuna").append(`<option value="${comuna}">${comuna}</option>`);
                    });
                }
            });
        }
    });

    // Configuración de validación
    $("form").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules: {
            nombre: {
                required: true
            },
            apellidos: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                pwcheck: true,
                minlength: 8
            },
            confPassword: {
                required: true,
                equalTo: "#password"
            },
            comuna: {
                required: function() {
                    return $("#comuna").val() === "";
                }
            },
            region: {
                required: function() {
                    return $("#region").val() === "";
                }
            }
        },
        messages: {
            nombre: {
                required: "El nombre es requerido"
            },
            apellidos: {
                required: "Los apellidos son requeridos"
            },
            email: {
                required: "El correo es requerido",
                email: "El formato no es el correcto"
            },
            password: {
                required: "La contraseña es requerida",
                pwcheck: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.",
                minlength: "Debe contener al menos 8 caracteres"
            },
            confPassword: {
                required: "La confirmación de la contraseña es requerida",
                equalTo: "Las contraseñas no coinciden"
            },
            region: {
                required: "La región es requerida"
            },
            comuna: {
                required: "La comuna es requerida"
            }
        },
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback'); // Estilo para Bootstrap
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent()); // Coloca el mensaje de error después del input-group
            } else {
                error.insertAfter(element); // Coloca el mensaje de error después del elemento
            }
        },
        highlight: function(element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element) {
            $(element).removeClass("is-invalid").addClass("is-valid");
        }
    });

    $.validator.addMethod("pwcheck", function(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
    }, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.");
});
