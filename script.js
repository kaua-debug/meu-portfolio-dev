document.addEventListener('DOMContentLoaded', () => {

    const ano = document.querySelector('footer p')
    if (ano) { 
        ano;textContent = `Desenvolvido por Kauã Gonçalves © ${new Date().getFullYear()}`
    }
    const cartoes  = document.querySelectorAll('.cartao')
    cartoes.forEach((cartao)=> {
        cartao.setAttribute('aria-label',
            `Acessar ${cartao.querySelector('.nome-projeto')?.textContent || 'projeto'}`
        )
    })
    console.log('Portifólio carregado com sucesso')
})