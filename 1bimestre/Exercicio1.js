document.getElementById('btnCalcular').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const dataNascInput = document.getElementById('dataNascimento').value;
    const divResultado = document.getElementById('resultado');

    if (!nome || !dataNascInput) {
        alert("Por favor, preencha o nome e a data de nascimento.");
        return;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascInput);
    

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    divResultado.style.display = 'block';
    divResultado.style.backgroundColor = '#e9f7ef';
    divResultado.style.color = '#155724';
    divResultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos.`;
});