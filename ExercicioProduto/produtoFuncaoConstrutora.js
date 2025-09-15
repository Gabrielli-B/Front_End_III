function Produto(nome,preco,qtd){
    this.nome = nome;
    this.preco = preco;
    this.qtd = qtd;
}

Produto.prototype.total = function(){
    return (this.preco * this.qtd);
}

Produto.prototype.addQtd = function(valor){
    if(typeof valor!== "number" || valor <= 0){
        console.log("VALOR TEM QUE SER NÚMERO POSITIVO!!!");
        return this.qtd;
    }
    this.qtd += valor;
    return this.qtd;
}

Produto.prototype.remove = function(valor){
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

Produto.prototype.descricao = function(){
    return "Produto: " + this.nome + " possui " + this.qtd +
           "itens no estoque, com valor de R$ " + this.preco;
}
