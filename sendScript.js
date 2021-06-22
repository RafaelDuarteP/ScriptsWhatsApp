function enviaRoteiro(roteiro) {
    let lines = roteiro.split("\n");
    let i = 0;
    setInterval(() => {
        if (i >= lines.length) return;
        let line = lines[i];
        if (line.trim() != '') {
            console.log(line);
            document.querySelector('div._2_1wd[data-tab="6"]').textContent = line;
            document.querySelector('div._2_1wd[data-tab="6"]').dispatchEvent(new InputEvent('input', { bubbles: true }));
            document.querySelector("button._1E0Oz").click();
        }
        i++;
    }, 500);
}

enviaRoteiro(`
Cole o roteiro do filme aqui
`
);