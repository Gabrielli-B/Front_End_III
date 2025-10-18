const contaBancaria = {
    titular : "joao",
    saldo : 1200,

    depositar(valor){
        if(valor<=0){
            return "Impossível depositar valor nulo ou negativo!";
        }else{
            this.saldo+=valor;
            return "Deposito concluído com sucesso!";
        }
    },

    sacar(valor){
        if(this.saldo === 0){
            return "Impossivel sacar pois saldo em conta é nulo";
        }else if(this.saldo < valor){
            return "Impossível sacar um valor maior que saldo em conta!";
        }else{
            this.saldo-=valor;
            return "Saque efetuado com sucesso!";
        }
    },

    mostrarSaldo(){
        console.log("saldo em conta: "+this.saldo);
    }
}

contaBancaria.mostrarSaldo();
console.log(contaBancaria.depositar(100));
contaBancaria.mostrarSaldo();
console.log(contaBancaria.sacar(100));
contaBancaria.mostrarSaldo();