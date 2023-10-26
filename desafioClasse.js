const prompt = require("prompt-sync")();
const nickname = prompt("Nome: ");
const age = Number(prompt("Idade: "));
const type = Number(prompt("Tipo de Heroi(1-Guerreiro, 2-Mago, 3-Monge, 4-Ninja):  ")); //Usuário Informa de acardo com o hero

class hero {
    constructor (name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(type){
        switch(this.type){
            case 1:
                console.log(`O Guerreiro atacou usando Espada`)
                break
            case 2:
                console.log(`O Mago atacou usando magia`)
                break
            case 3:
                console.log(`O Monge atacou usando artes marciais`)
                break
            case 4: 
                console.log(`O Ninja atacou usando shuriken`)
                break
            default: 
                console.log("Erro !!")
                break
        }
    }
}
let movimento = new hero(nickname, age, type);
movimento.attack(movimento.type);