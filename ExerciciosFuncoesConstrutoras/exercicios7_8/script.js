export function Musica(nome,artista,album,tempoDuracao,genero,posicaoMusica,playing){
    this.nome = nome;
    this.artista = artista;
    this.album = album;
    this.tempoDuracao = tempoDuracao;
    this.genero = genero;
    this.posicaoMusica = posicaoMusica;
    this.playing = playing;
}

Musica.prototype.play = function(){
    this.playing = true;
    console.log("Tocando a música " + this.nome);
}

Musica.prototype.pause = function(){
    this.playing = false; 
}

let musica = new Musica("All of me","Jhon Legend","desconhecido","3:05","Pop",1,false);
console.log(musica);

