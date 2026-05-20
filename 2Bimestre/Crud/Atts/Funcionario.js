const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

// Mapeamento de todos os inputs do Modal
const sNome = document.querySelector('#m-nome')
const sIdade = document.querySelector('#m-idade')
const sRg = document.querySelector('#m-rg')
const sCpf = document.querySelector('#m-cpf')
const sEmail = document.querySelector('#m-email')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')

const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

// Impede a digitação de letras em campos numéricos (Idade, RG, CPF)
function validarNumeros(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  // Fecha o modal ao clicar fora dele
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      fecharModal()
    }
  }

  if (edit) {
    // Se for edição, popula o modal com os dados existentes
    sNome.value = itens[index].nome
    sIdade.value = itens[index].idade
    sRg.value = itens[index].rg
    sCpf.value = itens[index].cpf
    sEmail.value = itens[index].email
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    id = index
  } else {
    // Se for inclusão, limpa os campos
    sNome.value = ''
    sIdade.value = ''
    sRg.value = ''
    sCpf.value = ''
    sEmail.value = ''
    sFuncao.value = ''
    sSalario.value = ''
    id = undefined
  }
}

function fecharModal() {
  modal.classList.remove('active')
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  if (confirm(`Deseja realmente excluir o funcionário ${itens[index].nome}?`)) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
}

// Cria a linha da tabela com todos os novos campos incluídos
function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.idade}</td>
    <td>${item.rg}</td>
    <td>${item.cpf}</td>
    <td>${item.email}</td>
    <td>${item.funcao}</td>
    <td>R$ ${parseFloat(item.salario).toFixed(2)}</td>
    <td class="acao">
      <button onclick="editItem(${index})">
        <i class='bx bx-edit'></i>
      </button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})">
        <i class='bx bx-trash'></i>
      </button>
    </td>
  `
  tbody.appendChild(tr)
}

// Evento disparado ao submeter o formulário (Botão Salvar)
document.getElementById('meuFormulario').onsubmit = e => {
  e.preventDefault() // Impede a página de recarregar

  // 1. Validações de tamanho para RG e CPF
  if (sRg.value.length !== 11) {
    alert(" Erro: O RG deve conter exatamente 11 números.");
    sRg.focus();
    return;
  }

  if (sCpf.value.length !== 11) {
    alert(" Erro: O CPF deve conter exatamente 11 números.");
    sCpf.focus();
    return;
  }

  // 2. Salva as alterações ou cria um novo registro
  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].idade = sIdade.value
    itens[id].rg = sRg.value
    itens[id].cpf = sCpf.value
    itens[id].email = sEmail.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
    alert("🔄 Dados alterados com sucesso!");
  } else {
    itens.push({
      nome: sNome.value,
      idade: sIdade.value,
      rg: sRg.value,
      cpf: sCpf.value,
      email: sEmail.value,
      funcao: sFuncao.value,
      salario: sSalario.value
    })
    alert(" Funcionário cadastrado com sucesso!");
  }

  setItensBD()
  fecharModal()
  loadItens()
}

// Renderiza a tabela na tela buscando os dados atualizados
function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''

  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

// Funções de persistência no LocalStorage
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

// Inicializa a tabela ao carregar o sistema
loadItens()
