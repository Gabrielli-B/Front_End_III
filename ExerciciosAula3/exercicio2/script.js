function Quadrado(cor = "#000", x = 0, y = 0, lado = 1) {
    this.cor = cor;
    this.x = x;
    this.y = y;
    this.lado = lado;
}

Quadrado.prototype.crescer = function (num) {
    this.lado += num;
}

Quadrado.prototype.diminuir = function (num) {
    this.lado -= num;
    if (this.lado < 1) {
        this.lado = 1;
        alert("Não é possível diminuir mais! Mínimo 1 atingido.");
    }
}

Quadrado.prototype.setPosicao = function (x, y) {
    this.x = x;
    this.y = y;
}
Quadrado.prototype.getPosicao = function () {
    return [this.x, this.y];
}

Quadrado.prototype.moveDireita = function (valor) {
    this.x += valor;
}

Quadrado.prototype.moveEsquerda = function (valor) {
    this.x -= valor;
}

Quadrado.prototype.moveCima = function (valor) {
    this.y += valor;
}

Quadrado.prototype.moveBaixo = function (valor) {
    this.y -= valor;
}

Quadrado.prototype.getArea = function () {
    return (this.lado * this.lado);
}

Quadrado.prototype.getPerimetro = function () {
    return (4 * this.lado);
}

Quadrado.prototype.renderizar = function () {
    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.width = this.lado + "px";
    div.style.height = this.lado + "px";
    div.style.backgroundColor = this.cor;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";

    document.body.appendChild(div);

    this.elementoDOM = div;
}

Quadrado.prototype.update = function () {
    if (this.elementoDOM) {
        this.elementoDOM.style.width = this.lado + "px";
        this.elementoDOM.style.height = this.lado + "px";
        this.elementoDOM.style.backgroundColor = this.cor;
        this.elementoDOM.style.left = this.x + "px";
        this.elementoDOM.style.top = this.y + "px";
    }
}

//teste
const q = new Quadrado("#004", 40, 30, 100);
q.renderizar();
q.crescer(207);
q.moveBaixo(39);
q.update();

const q2 = Object.create(Quadrado.prototype);
Quadrado.call(q2, "#00f", 200, 50, 150);
q2.renderizar(); 