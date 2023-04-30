$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
});  

$(document).ready(function() {
    $('form').submit(function(event) {
    event.preventDefault();
    if ($(this).valid()) {
        $('form').hide();
        $('header').after('<p>Formulário enviado com sucesso!</p>');
        $('body').append('<button id="voltar">Voltar</button>');
    }
});

$('body').on('click', '#voltar', function() {
    $('form').show();
    $('p').remove();
    $(this).remove();
    $('form')[0].reset();
});
});