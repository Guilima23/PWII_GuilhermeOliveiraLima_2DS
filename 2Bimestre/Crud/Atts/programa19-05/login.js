function validarNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

/**
 * FUNÇÃO DO BOTÃO: CADASTRAR
 */
function cadastrar() {
    // 1. Captura os elementos do DOM
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value.trim();
    const rg = document.getElementById('rg').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();

    // 2. Validação de Campos Vazios
    if (!nome || !idade || !rg || !cpf || !email) {
        alert(" Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    // 3. Validação de Tamanho do RG (Exatamente 11 dígitos)
    if (rg.length !== 11) {
        alert("Erro: O RG deve conter exatamente 11 números.");
        document.getElementById('rg').focus();
        return;
    }

    // 4. Validação de Tamanho do CPF (Exatamente 11 dígitos)
    if (cpf.length !== 11) {
        alert(" Erro: O CPF deve conter exatamente 11 números.");
        document.getElementById('cpf').focus();
        return;
    }

    // 5. Sucesso
    console.log("--- NOVO CADASTRO ---");
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("RG:", rg);
    console.log("CPF:", cpf);
    console.log("E-mail:", email);
    
    alert(" Usuário " + nome + " cadastrado com sucesso no sistema!");
    
    // Opcional: Se quiser que o formulário seja enviado para o servidor após o sucesso, descomente a linha abaixo:
    // document.getElementById('meuFormulario').submit();
}

/**
 * FUNÇÃO DO BOTÃO: ALTERAR
 */
function alterar() {
    const nome = document.getElementById('nome').value.trim();

    if (!nome) {
        alert("Informe pelo menos o NOME do registro que você deseja alterar.");
        document.getElementById('nome').focus();
    } else {
        // Aqui simulamos a alteração usando os dados atuais do formulário
        alert("As informações de '" + nome + "' foram atualizadas com sucesso!");
    }
}


