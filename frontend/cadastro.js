let cep = document.getElementById('cep');

cep.addEventListener('focusout', () => {
    fetch('https://viacep.com.br/ws/' + cep.value + '/json/')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('XUCESSO!!!')
            console.log(data)
            let bairro = document.getElementById('bairro').value = data.bairro;
            let estado = document.getElementById('estado').value = data.uf;
            let cidade = document.getElementById('cidade').value = data.localidade;
            let endereco = document.getElementById('endereco').value = data.logradouro;

        })
        .catch(function (erro) {
            console.log(erro)
        })

})