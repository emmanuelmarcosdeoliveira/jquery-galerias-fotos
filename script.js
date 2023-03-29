$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown(); // Com esse comando o formulario  aparece na tela.
  });
  $("#botao-cancelar").click(function () {
    $("form").slideUp(); // Com esse comando o formulário é recolhido.
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $('<li style="display: none"> </li>');
    $(`<img src="${enderecoNovaImagem}" /> `).appendTo(novoItem);
    $(`
        <div class ="overlay-imagem-link">
          <a href="${enderecoNovaImagem}" target ="_blank"
            title ="Ver imagem em tamanho real"> 
            Ver imagem em tamanho real 
          </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(2000);
    $('#endereco-imagem-nova').val('')
  });
});
