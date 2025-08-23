const botao = document.querySelector("button");
const lista = document.querySelector("#lista-aluno");

//array para armazenas os alunos
const alunos = [];

//adiciona o evento de clique
botao.addEventListener("click", function(){
    //document.querySelector → pega um elemento específico no HTML.
    //value.trim() → remove espaços extras do início e fim do texto.
    const id = document.querySelector("#id").value.trim();
    const nome = document.querySelector('#nome').value.trim();
    const nota1 = parseFloat(document.querySelector("#nota1").value);
    //parseFloat() → converte texto para número decimal.
    const nota2 = parseFloat(document.querySelector("#nota2").value);

    //verifica se o nome foi preenchido

    if(nome === ""){
        alert("Por favor, preencha o nome.");
        return; 
    }

    //verifica se as notas são números e estão entre 0 e 10 
    
    //isNaN() → verifica se não é número.
    if(isNaN(nota1) || nota1 < 0 || nota1 > 10){
        alert("A Nota 1 deve ser um número entre 0 e 10");
        return;
    }
    if(isNaN(nota2) || nota2 < 0 || nota2 > 10){
        alert("A Nota 2 deve ser um número entre 0 e 10");
        return;
    }
    
    //criar objeto aluno
    const aluno = {
        id : id,
        nome: nome,
        nota1 : nota1,
        nota2 : nota2
    };

    //adicionar ao array
    alunos.push(aluno);

    //atualizar a lista na tela
    atualizarLista();

    // Limpar campos
    document.querySelector("#id").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#nota1").value = "";
    document.querySelector("#nota2").value = "";

    alert("Cadastro realizado com sucesso!");
})

// Função para atualizar a lista de alunos na tela
function atualizarLista(){
    lista.innerHTML = ""; //limpa a lista, impede valores duplicados
    alunos.forEach(aluno =>{
        const li = document.createElement("li");
        li.textContent = `ID: ${aluno.id} | Nome: ${aluno.nome} | Nota 1: ${aluno.nota1} | Nota 2: ${aluno.nota2}`;
        lista.appendChild(li);
    })
}
