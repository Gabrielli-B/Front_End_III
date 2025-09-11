function LinhaAerea(codigo,cidadeOrigem,cidadeDestino,dataPartida,dataChegada,valorPassagem,qtdAssentos){
    this.codigo = codigo;
    this.cidadeOrigem = cidadeOrigem;
    this.cidadeDestino = cidadeDestino;
    this.dataPartida = new Date(dataPartida);
    this.dataChegada = new Date(dataChegada);
    this.valorPassagem = valorPassagem;
    this.qtdAssentos = qtdAssentos;

    this.assentos = [];

    for (let i = 1; i <= qtdAssentos; i++) {
        this.assentos.push({
            numero: i,
            disponivel: true
        });
    }

    this.getValor = function(){
        return this.valorPassagem;
    }

    this.getDestino = function(){
        return this.cidadeDestino;
    }

    this.getOrigem = function(){
        return this.cidadeOrigem;
    }

    this.getChegada = function(){
        return this.dataChegada;
    }

    this.getAssentos = function(){
        this.assentos.forEach(function(assento){
            if(assento.disponivel === true){
                console.log(assento.numero + " - livre");
            }else{
                console.log(assento.numero + " - ocupado");
            }
        });
    }

    this.getAssentosLivres = function() {
        let assentosLivres = [];

        for (let i = 0; i < this.assentos.length; i++) {
            if (this.assentos[i].disponivel === true) {
                assentosLivres.push(this.assentos[i].numero);
            }
        }
        return assentosLivres;
    };

    this.setValor = function(valor){
        this.valorPassagem = valor;
    }

    this.atrasar = function(minutos){
        this.dataPartida.setMinutes(this.dataPartida.getMinutes() + minutos);
        this.dataChegada.setMinutes(this.dataChegada.getMinutes() + minutos);
    }

    this.comprar = function(id){
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
}