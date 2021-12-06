$(function(){
    $('.botoes').click(inseretarefa);
});

function inseretarefa() {
    var corpoTabela = $('.tabeladados').find('tbody');
    var titulo = $('.campotitulo').val();
    var obs = $('.campoobs').val();
    
    var linha = novaLinha(titulo, obs);
    linha.find('.botao-remover').click(removelinha);
    corpoTabela.append(linha);
}

function novaLinha(titulo,obs) {
    var linha= $ ('<tr>');
    var colunatitulo = $('<td>').text(titulo);
    var colunaobs = $('<td>').text(obs);
    var colunaremover = $('<td>');
    var link = $('<a>').addClass('botao-remover').attr('href','#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');

    link.append(icone);
    colunaremover.append(link);
    linha.append(colunatitulo);
    linha.append(colunaobs);
    linha.append(colunaremover);

    return linha;
}

function removelinha(Event){
    Event.preventDefault();
    $(this).parent().parent().remove();
}
