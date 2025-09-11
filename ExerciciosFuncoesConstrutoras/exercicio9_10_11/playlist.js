import { Musica } from "../exercicios7_8/script.js";

function Playlist(nome){
    this.nome = nome
    this.musicas = [];
    this.musicaAtual = 0;
}

Playlist.prototype.mostraPlaylist = function() {
    if(this.musicas.length === 0){
        console.log("A playlist "+ this.nome + " está vazia");
    }else{
        console.log("Playlist: " + this.nome);
        this.musicas.forEach((musica,index)=>{
            console.log( (index + 1) + " - " + musica.nome);
        });
    }
};

Playlist.prototype.adicionaMusica = function(musica){
    if(musica instanceof Musica){
        this.musicas.push(musica);
        console.log("Música adicionada " + musica.nome);
    }else{
        console.log("Não é o objeto Musica");
    }
}

Playlist.prototype.removeMusica = function(indice) {
    if(indice >= 0 && indice < this.musicas.length){
        let removida = this.musicas.splice(indice, 1)[0];
        console.log("Música removida: " + removida.nome);
    } else {
        console.log("Índice inválido.");
    }
};

Playlist.prototype.removeMusica = function(numero) {
    let indice = numero - 1; 
    if(indice >= 0 && indice < this.musicas.length){
        let removida = this.musicas.splice(indice, 1)[0];
        console.log("Música removida: " + removida.nome);

        if(this.musicas.length === 0){
            this.musicaAtual = 0; 
        } else if(indice === this.musicaAtual){
            this.musicaAtual = Math.min(indice, this.musicas.length - 1);
        } else if(indice < this.musicaAtual){
            this.musicaAtual--;
        }
    } else {
        console.log("Número inválido.");
    }
};

Playlist.prototype.getMusicaCorrente = function() {
    if(this.musicas.length === 0){
        console.log("A playlist está vazia.");
        return null;
    }
    if(this.musicaAtual < 0 || this.musicaAtual >= this.musicas.length){
        console.log("Nenhuma música corrente válida.");
        return null;
    }
    return this.musicaAtual; 
};

Playlist.prototype.setMusicaCorrente = function(indice) {
    if(indice < 0 || indice >= this.musicas.length){
        console.log("Índice inválido.");
        return;
    }
    if(this.musicas[this.musicaAtual] && this.musicas[this.musicaAtual].playing){
        this.musicas[this.musicaAtual].pause();
        console.log("Música pausada: " + this.musicas[this.musicaAtual].nome);
    }
    this.musicaAtual = indice;
    this.musicas[this.musicaAtual].play();
};

//testes
let p1 = new Playlist("Favoritas");

let m1 = new Musica("All of Me", "John Legend", "Desconhecido", "3:05", "Pop", 1, false);
let m2 = new Musica("Shape of You", "Ed Sheeran", "Divide", "3:53", "Pop", 2, false);
let m3 = new Musica("Yellow", "Coldplay", "Parachutes", "4:30", "Rock", 3, false);

p1.adicionaMusica(m1);
p1.adicionaMusica(m2);
p1.adicionaMusica(m3);

p1.mostraPlaylist();

console.log("Música corrente (índice):", p1.getMusicaCorrente());

p1.setMusicaCorrente(1);
p1.setMusicaCorrente(2); 

p1.removeMusica(2); 
p1.mostraPlaylist();
console.log("Música corrente agora:", p1.getMusicaCorrente());

//10
Playlist.prototype.play = function() {
    if(this.musicas.length === 0){
        console.log("A playlist está vazia.");
        return;
    }
    let musica = this.musicas[this.musicaAtual];
    if(!musica.playing){
        musica.play();
        console.log("Tocando: " + musica.nome);
    } else {
        console.log("A música já está tocando: " + musica.nome);
    }
};

Playlist.prototype.pause = function() {
    if(this.musicas.length === 0){
        console.log("A playlist está vazia.");
        return;
    }
    let musica = this.musicas[this.musicaAtual];
    if(musica.playing){
        musica.pause();
        console.log("Pausada: " + musica.nome);
    } else {
        console.log("A música já está pausada: " + musica.nome);
    }
};

Playlist.prototype.next = function() {
    if(this.musicas.length === 0){
        console.log("A playlist está vazia.");
        return;
    }
    let proximoIndice = (this.musicaAtual + 1) % this.musicas.length;
    this.setMusicaCorrente(proximoIndice);
};

Playlist.prototype.previous = function() {
    if(this.musicas.length === 0){
        console.log("A playlist está vazia.");
        return;
    }
    let indiceAnterior = (this.musicaAtual - 1 + this.musicas.length) % this.musicas.length;
    this.setMusicaCorrente(indiceAnterior);
};

//11
function Player() {
    this.playlists = [];
    this.playlistAtual = null; 
}


Player.prototype.adicionaPlaylist = function(playlist) {
    if(playlist instanceof Playlist){
        this.playlists.push(playlist);
        console.log("Playlist adicionada: " + playlist.nome);
    } else {
        console.log("Não é um objeto Playlist válido.");
    }
};


Player.prototype.selecionaPlaylist = function(indice) {
    if(indice >= 0 && indice < this.playlists.length){
        this.playlistAtual = indice;
        console.log("Playlist selecionada: " + this.playlists[indice].nome);
    } else {
        console.log("Índice de playlist inválido.");
    }
};


Player.prototype.removePlaylist = function(indice) {
    if(indice >= 0 && indice < this.playlists.length){
        let removida = this.playlists.splice(indice, 1)[0];
        console.log("Playlist removida: " + removida.nome);

        if(this.playlists.length === 0){
            this.playlistAtual = null;
        } else if(this.playlistAtual === indice){
            this.playlistAtual = 0;
        } else if(this.playlistAtual > indice){
            this.playlistAtual--;
        }
    } else {
        console.log("Índice inválido.");
    }
};


Player.prototype.play = function() {
    if(this.playlistAtual === null){
        console.log("Nenhuma playlist selecionada.");
        return;
    }
    this.playlists[this.playlistAtual].play();
};

Player.prototype.pause = function() {
    if(this.playlistAtual === null){
        console.log("Nenhuma playlist selecionada.");
        return;
    }
    this.playlists[this.playlistAtual].pause();
};

Player.prototype.next = function() {
    if(this.playlistAtual === null){
        console.log("Nenhuma playlist selecionada.");
        return;
    }
    this.playlists[this.playlistAtual].next();
};

Player.prototype.previous = function() {
    if(this.playlistAtual === null){
        console.log("Nenhuma playlist selecionada.");
        return;
    }
    this.playlists[this.playlistAtual].previous();
};

Player.prototype.mostraPlaylists = function() {
    if(this.playlists.length === 0){
        console.log("Não há playlists no player.");
        return;
    }
    console.log("Playlists no player:");
    this.playlists.forEach((pl, idx) => {
        console.log((idx + 1) + " - " + pl.nome);
    });
};