const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')

// Mapeamento dos inputs do Modal
const sNome = document.querySelector('#m-nome')
const sIdade = document.querySelector('#m-idade')
const sRg = document.querySelector('#m-rg')
const sCpf = document.querySelector('#m-cpf')
const sEmail = document.querySelector('#m-email')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')

let itens = []
let id = undefined

// Impede caracteres que não sejam números
function validarNumeros(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      fecharModal()
    }
  }

  if (edit && itens[index]) {
    sNome.value = itens[index].nome || ''
    sIdade.value = itens[index].idade || ''
    sRg.value = itens[index].rg || ''
    sCpf.value = itens[index].cpf || ''
    sEmail.value = itens[index].email || ''
    sFuncao.value = itens[index].funcao || ''
    sSalario.value = itens[index].salario || ''
    id = index
  } else {
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
  if (itens[index] && confirm(`Deseja realmente excluir o funcionário ${itens[index].nome}?`)) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  const salarioVal = parseFloat(item.salario);
  const salarioFormatado = !isNaN(salarioVal) ? salarioVal.toFixed(2) : '0.00';

  tr.innerHTML = `
    <td>${item.nome || ''}</td>
    <td>${item.idade || ''}</td>
    <td>${item.rg || ''}</td>
    <td>${item.cpf || ''}</td>
    <td>${item.email || ''}</td>
    <td>${item.funcao || ''}</td>
    <td>R$ ${salarioFormatado}</td>
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

// Vincula o salvamento ao formulário para respeitar os validadores nativos
const form = document.getElementById('meuFormulario')
if (form) {
  form.onsubmit = e => {
    e.preventDefault()

    // Validações de tamanho estrito herdadas do código anterior
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

    const funcionario = {
      nome: sNome.value.trim(),
      idade: sIdade.value.trim(),
      rg: sRg.value.trim(),
      cpf: sCpf.value.trim(),
      email: sEmail.value.trim(),
      funcao: sFuncao.value.trim(),
      salario: sSalario.value
    }

    if (id !== undefined) {
      itens[id] = funcionario
      alert("Dados alterados com sucesso!");
    } else {
      itens.push(funcionario)
      alert("Funcionário cadastrado com sucesso!");
    }

    setItensBD()
    fecharModal()
    loadItens()
  }
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  
  if (Array.isArray(itens)) {
    itens.forEach((item, index) => {
      if (item) insertItem(item, index)
    })
  }
}

function getItensBD() {
  try {
    return JSON.parse(localStorage.getItem('dbfunc')) || []
  } catch (e) {
    return []
  }
}

function setItensBD() {
  localStorage.setItem('dbfunc', JSON.stringify(itens))
}

// Renderização inicial
loadItens()
