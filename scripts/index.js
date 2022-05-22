const nomeInput = document.getElementById("input-nome");
const sobrenomeInput = document.getElementById("input-sobrenome");
const nascimentoInput = document.getElementById("input-nascimento");
const masculinoRadio = document.getElementById("input-masc");
const femininoRadio = document.getElementById("input-fem");
const linguagemSelect = document.getElementById("select-lingua");
const corSelect = document.getElementById("input-cor")
const mensagem = document.getElementById("erro");
const listaDeCadastro = [];

function enviar() {
    const valorNome = nomeInput.value;
    const valorSobrenome = sobrenomeInput.value;
    const valorNascimento = nascimentoInput.value;
    const valorMasculino = masculinoRadio.checked;
    const valorFeminino = femininoRadio.checked;
    const valorLinguagem = linguagemSelect.value;
    const valorCor = corSelect.value;
    const valorSexo = valorMasculino ? "masculino" : valorFeminino ? "feminino" : undefined;
    if (valorNome == "") {
        mensagem.innerText = "É necessário preencher o nome.";
        return;
    }
    if (valorSobrenome == "") {
        mensagem.innerText = "É necessário preencher o sobrenome.";
        return;
    }
    if (valorNascimento == "") {
        mensagem.innerText = "É necessário preencher a data de nascimento.";
        return;
    }
    if (valorSexo == undefined) {
        mensagem.innerText = "É necessário selecionar o sexo.";
        return;
    }
    if (valorLinguagem == "") {
        mensagem.innerText = "É necessário selecionar uma lingua.";
        return;
    }
    mensagem.innerText = "";
    const novoCadastro = {
        nome: valorNome,
        sobrenome: valorSobrenome,
        dataDeNascimento: valorNascimento,
        sexo: valorSexo,
        linguagem: valorLinguagem,
        corFavorita: valorCor
    }
    listaDeCadastro.push(novoCadastro)

    nomeInput.value = "";
    sobrenomeInput.value = "";
    nascimentoInput.value = "";
    masculinoRadio.checked = false;
    femininoRadio.checked = false;
    linguagemSelect.value = "";
    corSelect.value = "#00000";
    inserirPessoasTabela()
}

function inserirPessoasTabela(){
    const tabela = document.getElementById("pessoasCad");
    tabela.innerHTML = "";
    const linhaCabecalho = document.createElement("tr");
    const nomeCabecalho = document.createElement("th");
    const sobrenomeCabecalho = document.createElement("th");
    const corCabecalho = document.createElement("th");

    nomeCabecalho.innerText = "Nome";
    sobrenomeCabecalho.innerText = "Sobrenome";
    corCabecalho.innerText = "Cor";

    linhaCabecalho.appendChild(nomeCabecalho);
    linhaCabecalho.appendChild(sobrenomeCabecalho);
    linhaCabecalho.appendChild(corCabecalho);
    tabela.appendChild(linhaCabecalho);

    listaDeCadastro.forEach(registro => {
        tabela.appendChild(criarElementoRegistro(registro));
    })
}

function criarElementoRegistro(registro){
    const itemTabela = document.createElement("tr");
    const nomeItem = document.createElement("td");
    const sobrenomeItem = document.createElement("td");
    const corItem = document.createElement("td");

    nomeItem.innerText = registro.nome;
    sobrenomeItem.innerText = registro.sobrenome;
    corItem.innerText = registro.corFavorita;
    corItem.style.backgroundColor = registro.corFavorita;
    itemTabela.appendChild(nomeItem);
    itemTabela.appendChild(sobrenomeItem);
    itemTabela.appendChild(corItem);
    return itemTabela;
}