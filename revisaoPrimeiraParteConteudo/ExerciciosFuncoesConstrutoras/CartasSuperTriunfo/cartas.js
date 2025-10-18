function CartaDino(nome,tipoAlimentacao,periodo,altura,comprimento,peso,viveu){
    this.nome = nome;
    this.tipoAlimentacao = tipoAlimentacao;
    this.periodo = periodo;
    this.altura = altura;
    this.comprimento = comprimento;
    this.peso = peso;
    this.viveu = viveu;   
}

CartaDino.prototype.comparar = function(carta,atributo){
    if(this[atributo] > carta[atributo]){
        return "Venceu";
    }else if(this[atributo] < carta[atributo]){
        return "Perdeu";
    }else{
        return "Empate";        
    }
}

const carta1 = new CartaDino("Tyrannosaurus Rex", "Carnívoro", "Cretáceo", 4, 12, 8000, 65); 
const carta2 = new CartaDino("Triceratops", "Herbívoro", "Cretáceo", 3, 9, 6000, 68);
const carta3 = new CartaDino("Velociraptor", "Carnívoro", "Cretáceo", 0.5, 2, 15, 70);

console.log(carta1.comparar(carta2,"peso"));

console.log(carta2.comparar(carta1,"altura"));

console.log(carta1.comparar(carta2,"nome"));

function Jogo(jogador1,jogador2){
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
}

Jogo.prototype.batalhar = function(atributo){
    let resultado = "";
    if(this.jogador1[atributo] > this.jogador2[atributo]){
        resultado = this.jogador1.nome + " venceu!";
    }else if(this.jogador1[atributo] < this.jogador2[atributo]){
        resultado = this.jogador2.nome + " venceu!";
    }else{
        resultado = " Empate!";
    }
    console.log("Atributo escolhido: "+atributo);
    console.log(this.jogador1.nome + " : " + this.jogador1[atributo]);
    console.log(this.jogador2.nome + " : " + this.jogador2[atributo]);
    console.log("Resultado: "+resultado);
};

const jogo1 = new Jogo(carta1,carta2);

jogo1.batalhar("peso");