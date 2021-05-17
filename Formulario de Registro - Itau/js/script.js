let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');


cep.value = '68030670';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+ cep +'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(res) {

    if("erro" in res) {
        alert('CEP não encontrado');
        return;
    }

    rua.value = res.logradouro;
    bairro.value = res.bairro;
    cidade.value = res.localidade;
    estado.value = res.uf;
}
