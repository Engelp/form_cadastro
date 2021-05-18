function validaCPF(cpf) {
    console.log(cpf.length);
    if(cpf.length != 11) {
        return false;
    }else{

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        console.log("numero do cpf: " + numeros);
        console.log("digitos do cpf: " + digitos);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 -i) * i;
        }

        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validacao do primeiro Digito
        if(resultado != digitos.charAt(0)){
            return false
        }

        console.log(digitos.toString().charAt(0) + " e a primeira posicao da variavel");

        soma = 0;
        numeros = cpf.substring(0, 10);
       
        for (var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(1)){
            return false
        }

        console.log(digitos.toString().charAt(1) + " e a segunda posicao da variavel");

        return true;
    }
}

function validacao() {
    console.log('Iniciando validacao do CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }else{
        document.getElementById('error').style.display = 'block';
    }
}

const mascaraCPF = (objeto, mascara) => {
    obj=objeto;
    masc=mascara;
    setTimeout('fMascEx()',1)
}

const fMascEx = () => {
    obj.value=masc(obj.value);
}

const maskCPF = (cpf) => {
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}