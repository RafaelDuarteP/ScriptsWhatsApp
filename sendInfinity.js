function enviaInfinito(texto) {
    setInterval(() => {
        console.log(texto);
        let caixaTexto = document.querySelector('div._2_1wd[data-tab="6"]');
        caixaTexto.textContent = texto;
        caixaTexto.dispatchEvent(new InputEvent('input', { bubbles: true }));
        document.querySelector("button._1E0Oz").click();
    }, 500);
}

enviaInfinito("Mensagem que vai ficar enviando");