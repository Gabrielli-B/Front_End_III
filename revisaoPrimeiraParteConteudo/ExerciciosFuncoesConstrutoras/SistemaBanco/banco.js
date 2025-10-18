class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    valor > 0 
      ? this.saldo += valor 
      : console.log("Impossível depositar saldo negativo ou nulo!");
  }

  sacar(valor) {
    if (this.saldo === 0) {
      console.log("IMPOSSÍVEL SACAR! saldo nulo");
    } else if (this.saldo < valor) {
      console.log("IMPOSSÍVEL SACAR! valor maior que saldo disponível");
    } else {
      this.saldo -= valor;
    }
  }

  verSaldo() {
    console.log(`Saldo disponível em conta de ${this.titular}: R$ ${this.saldo}`);
  }
}


const contaRodolfo = new ContaBancaria("Rodolfo", 250);
const contaRihanna = new ContaBancaria("Rihanna", 500);

contaRodolfo.sacar(50);
contaRihanna.depositar(50);

contaRodolfo.verSaldo();
contaRihanna.verSaldo();
