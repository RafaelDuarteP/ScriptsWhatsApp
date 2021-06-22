function enviaACadaTempo(texto,  quantidade, tempo){
    let i =0;
    setInterval(() =>{
        if (i >= quantidade) return;
        console.log(texto);
        let caixaTexto = document.querySelector('div._2_1wd[data-tab="6"]');
        caixaTexto.textContent = texto;
        caixaTexto.dispatchEvent(new InputEvent('input', { bubbles: true }));
        document.querySelector("button._1E0Oz").click();
        i++;
    },tempo*1000);
}

enviaACadaTempo("Mensagem",10,50);// primeiro numero: quantidade // segundo numero: tempo em segundos 