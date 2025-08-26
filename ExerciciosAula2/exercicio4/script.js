var funcionarios = [];

var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var salario = parseFloat(document.getElementById("salario").value);
    var cargo = document.getElementById("cargo").value;

    if(nome === "") {
        alert("O nome não pode ser vazio.");
            return;
    }
    if(isNaN(salario) || salario <= 0) {
        alert("O salário deve ser um número positivo.");
        return;
    }
    if(cargo === "") {
        alert("Selecione um cargo válido.");
        return;
    }

    var funcionario = {
        nome: nome,
        salario: salario,
        cargo: cargo
    };

    funcionarios.push(funcionario);

    alert("Funcionário cadastrado com sucesso!");

    console.log(funcionarios);
});

