function Aluno(nome,n1,n2){
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;
}

Aluno.prototype.media = function(){
    return (this.n1+this.n2)/2;
}

Aluno.prototype.situacao = function(){
    const situacao = this.media();
    let resul = "";
    if(situacao>=7){
        resul = "APROVADO!";
    }else{
        resul = "REPROVADO!";
    }

    console.log("Aluno: "+this.nome + " Situação: "+resul);
}

const aluno1 = new Aluno("Sofia",6.7,8.0);
const aluno2 = new Aluno("Matheus",9.7,9.0);
const aluno3 = new Aluno("Sabrina",4.7,2.0);


aluno1.media();
aluno2.media();
aluno3.media();

aluno1.situacao();
aluno2.situacao();
aluno3.situacao();