const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault() /* não deixa a pagina ser recarregada */
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('contentForm')
    
    let carregando = `<p>Cadastrando...</p>`
    
    let pronto = `<p>Cadastro realizado com sucesso</p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1500)
})