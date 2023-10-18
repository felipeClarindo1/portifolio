function lerArquivoETransferirParaHTML() {
    // Use a função fetch para carregar o arquivo de texto
    fetch('info.txt')
        .then(response => response.text())  // Transforma a resposta em texto
        .then(texto => {
            // Encontre o elemento de parágrafo pelo ID e defina o texto do parágrafo
            const paragrafo = document.getElementById('texto-para-inserir');
            paragrafo.textContent = texto;
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo de texto:', error);
        });
}

// Chame a função para realizar a ação
lerArquivoETransferirParaHTML();