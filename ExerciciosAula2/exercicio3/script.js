personagem = {
    nome:   "Maria",
    energia: 100,

    dano: function(valor){
        if(valor>0){
            this.energia-=valor;
        }
        if(this.energia<0){
            this.energia=0;
        }
    },

    status: function(){
        if(this.energia==0){
            return -1;
        }else{
            return 1;
        }
    },

    forca: 10,

    ataque: function(){
        return Math.floor(Math.random()* (this.forca+1));
    }

}

personagem2={
    nome: "Gabrielli",
    forca: 20,
    energia:80
}
