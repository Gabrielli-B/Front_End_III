class Produto{
    constructor(nome,preco,qtd){
        this.nome = nome;
        this.preco = preco;
        this.qtd = qtd;
    }

    total(){
        return (this.preco * this.qtd);
    }

    addQtd(valor){
        if(typeof valor!== "number" || valor <= 0){
            console.log("VALOR TEM QUE SER NÚMERO POSITIVO!!!");
            return this.qtd;
        }
        this.qtd += valor;
        return this.qtd;
    }

    remove(valor){
        if(typeof valor !== "number" || valor <= 0){
            console.log("VALOR TEM QUE SER NÚMERO POSITIVO!!!");
            return this.qtd;
        }
        if(this.qtd - valor < 0){
            console.log("NÃO HÁ ESTOQUE SUPERIOR AO VALOR INFORMADO");
            return this.qtd;
        }
        this.qtd -= valor;
        return this.qtd;
    }
    
    descricao(){
        return "Produto: " + this.nome + " possui " + this.qtd +
               "itens no estoque, com valor de R$ " + this.preco;
    }
}