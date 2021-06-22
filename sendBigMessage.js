function mensagemGigante(texto) {
    var text = ''
    for (i = 0; i <= 56500 / texto.length; i++) {
        text += texto;
    }
    console.log(text)
    let caixaTexto = document.querySelector('div._2_1wd[data-tab="6"]');
    caixaTexto.textContent = text;
    caixaTexto.dispatchEvent(new InputEvent('input', { bubbles: true }));
    document.querySelector("button._1E0Oz").click();
}


mensagemGigante("Mensagem");