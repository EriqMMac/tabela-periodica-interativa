const elementos = document.querySelectorAll('.elemento')

elementos.forEach((elemento) => {
    elemento.addEventListener('mouseenter', () => {

        const elementoSelecionado = document.querySelector('.selecionado');
        elementoSelecionado.classList.remove('selecionado');

        elemento.classList.add('selecionado');

        const imagemElementoGrande = document.querySelector('.elemento-grande');
        const idElemento = elemento.attributes.id.value;
        imagemElementoGrande.src = `./src/imagens/${idElemento}.jpg `;
    })
})