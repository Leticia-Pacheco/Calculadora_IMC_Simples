const calcular = document.getElementById('calcular');


function imc () {
    const entradaNome = document.getElementById('entradaNome').value;
    const entradaAltura = document.getElementById('entradaAltura').value;
    const entradaPeso = document.getElementById('entradaPeso').value;
    const resultado = document.getElementById('resultado');

    if (entradaNome !== '' && entradaAltura !== '' && entradaPeso !== ''){
        
        const valorImc = (entradaPeso / (entradaAltura * entradaAltura)).toFixed(1);

        let classificacao = "";

        if(valorImc < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorImc < 25) {
            classificacao = 'no peso ideal';
        } else if (valorImc < 30) {
            classificacao = 'um pouquinho acima do peso';
        } else if (valorImc < 35) {
            classificacao = 'na obesidade grau I';
        } else if (valorImc < 40) {
            classificacao = 'na obesidade grau II';
        } else {
            classificacao = 'na obesidade mórbida. CUIDADO!!!';
        }

        resultado.textContent = `${entradaNome}, seu IMC é ${valorImc} e você está ${classificacao}.`;

    }

    else{
        resultado.textContent = 'Preencha todos os campos solicitados!';
    }
}

calcular.addEventListener('click', imc);