

// Impede que o usuário digite qualquer coisa que não seja número
// Usado nos campos de RG e CPF através do evento oninput no HTML
function validarNumeros(input) {
    // Remove tudo o que não for dígito (0-9)
    input.value = input.value.replace(/[^0-9]/g, '');
}

/**
 * FUNÇÃO DO BOTÃO: CADASTRAR
 */
function cadastrar() {
    // Captura os elementos do DOM
    const nome = document.getElementById('nome').value.trim();
    const idade = document.getElementById('idade').value;
    const rg = document.getElementById('rg').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;

    // 1. Validação de Campos Vazios
    if (!nome || !idade || !rg || !cpf || !email) {
        alert("⚠️ Por favor, preencha todos os campos antes de cadastrar.");
        return;
    }

    // 2. Validação de Tamanho do RG (Exatamente 11 dígitos)
    if (rg.length !== 11) {
        alert("❌ Erro: O RG deve conter exatamente 11 números.");
        document.getElementById('rg').focus();
        return;
    }

    // 3. Validação de Tamanho do CPF (Exatamente 11 dígitos)
    if (cpf.length !== 11) {
        alert("❌ Erro: O CPF deve conter exatamente 11 números.");
        document.getElementById('cpf').focus();
        return;
    }

    // 4. Simulação de Sucesso
    console.log("--- NOVO CADASTRO ---");
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("RG:", rg);
    console.log("CPF:", cpf);
    console.log("E-mail:", email);
    
    alert("✅ Usuário " + nome + " cadastrado com sucesso no sistema!");
}

/**
 * FUNÇÃO DO BOTÃO: ALTERAR
 */
function alterar() {
    const nome = document.getElementById('nome').value;

    if (!nome) {
        alert("🔍 Informe o nome do registro que você deseja alterar.");
    } else {
        // Aqui entraria a lógica de buscar no banco de dados
        alert("🔄 As informações de '" + nome + "' foram atualizadas com sucesso!");
    }
}
function cadastrar() {
    // 1. Captura os valores
    const campos = {
        nome: document.getElementById('nome').value.trim(),
        idade: document.getElementById('idade').value,
        rg: document.getElementById('rg').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value
    };

    // 2. Verifica se QUALQUER campo está vazio
    // O Object.values transforma o objeto em uma lista e o .some verifica se há vazio
    if (Object.values(campos).some(valor => valor === "")) {
        alert("⚠️ Atenção: Todos os campos são obrigatórios!");
        return; // O 'return' para a execução aqui e não deixa cadastrar
    }

    // 3. Verifica as extensões de RG e CPF (que você pediu antes)
    if (campos.rg.length !== 11 || campos.cpf.length !== 11) {
        alert("❌ RG e CPF devem ter 11 dígitos.");
        return;
    }

    // Se passar por tudo...
    alert("✅ Sucesso! Todos os campos foram preenchidos corretamente.");
    console.log("Dados enviados:", campos);
}
function cadastrar() {
    const inputs = document.querySelectorAll('#meuFormulario input');
    const notificacao = document.getElementById('notificacao');
    let todosPreenchidos = true;

    // Resetar estados anteriores
    notificacao.classList.add('hidden');
    inputs.forEach(input => input.classList.remove('input-erro'));

    // Verificar campo por campo
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add('input-erro');
            todosPreenchidos = false;
        }
    });

    if (!todosPreenchidos) {
        // Mostra a notificação no topo
        notificacao.classList.remove('hidden');
        return; // Para a execução aqui
    }
}
    // Se tudo estiver OK, prossegue com o cadastro
    alert("🚀 Cadastro enviado com sucesso!");
