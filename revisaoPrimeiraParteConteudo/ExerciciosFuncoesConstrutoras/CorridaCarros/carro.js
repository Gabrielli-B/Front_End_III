function Carro(modelo,velocidadeMax,aceleracao){
    this.modelo = modelo;
    this.velocidadeMax = velocidadeMax;
    this.aceleracao = aceleracao;
}

Carro.prototype.tempoPara100 = function(){
    const velocidade100 = 27.78
    return velocidade100/this.aceleracao;
}

function aceleraMaisRapido(carro1,carro2){
    let resultado = "";
    if(carro1.tempoPara100() > carro2.tempoPara100()){
        resultado = "Carro " + carro2.modelo + " acelera mais rápido!"
    }else if(carro1.tempoPara100() < carro2.tempoPara100()){
        resultado = "Carro " + carro1.modelo + " acelera mais rápido!"
    }else{
        resultado = "Empate! os dois tem a mesma agilidade na aceleração."
    }

    console.log(resultado);
}

const carro1 = new Carro("Fusca", 120, 3);
const carro2 = new Carro("Mustang", 250, 7);
const carro3 = new Carro("Civic", 200, 5);

console.log(carro1.tempoPara100());
console.log(carro2.tempoPara100());
console.log(carro3.tempoPara100());

aceleraMaisRapido(carro1,carro2);
aceleraMaisRapido(carro1,carro3);
aceleraMaisRapido(carro2,carro3);