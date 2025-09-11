//ALTERANDO FUNÇÕES DA FUNÇÃO CONSTRUTORA "LinhaAerea"

//3 - 
this.comprar = function(id){
    if (id === undefined) {
        for (let i = 0; i < this.assentos.length; i++) {
            if (this.assentos[i].disponivel === true) {
                this.assentos[i].disponivel = false;
                return this.assentos[i].numero; 
            }
        }
        return false;
    } else {
        for (let i = 0; i < this.assentos.length; i++) {
            if (this.assentos[i].numero === id) {
                if (this.assentos[i].disponivel === true) {
                    this.assentos[i].disponivel = false;
                    return this.assentos[i].numero; 
                } else {
                    return false; 
                }
            }
        }
        return false; 
    }
};

//4
this.setValor = function(valor){
    if(valor<=0){
       this.valorPassagem = 1;
        console.log("Valor inserido é menor ou igual a 0, logo valor atribuido foi 1,00");
    }else{
        this.valorPassagem = valor;    
    }
}

//5
if (this.dataChegada < this.dataPartida) {
    console.log("A data de chegada não pode ser anterior à data de partida. Ajustando para 24 horas após a partida.");
    this.dataChegada = new Date(this.dataPartida.getTime() + 24*60*60*1000);  
}

//6
this.dataPartida = new Date(dataPartida);

const agora = new Date();

if (this.dataPartida < agora) {
    console.log("A data de partida não pode ser anterior à data atual. Ajustando para a data/hora atual.");
    this.dataPartida = agora;
}