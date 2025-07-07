const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de vibranium",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria || "Nenhuma"}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark LXXXV",
    armaSecundaria: "Repulsores e canhão de pulsos",
    velocidade: 75,
    forca: 80,
    resistencia: 85,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 80,
    forca: 95,
    resistencia: 90,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força bruta",
    armaSecundaria: "",
    velocidade: 65,
    forca: 100,
    resistencia: 95,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria || "Nenhuma"}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

const viuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Pistolas e técnicas de combate",
    armaSecundaria: "Bastões elétricos",
    velocidade: 90,
    forca: 70,
    resistencia: 75,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

const thanos = {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada dupla",
    velocidade: 60,
    forca: 95,
    resistencia: 100,
    descricao: function(){
        return this.getDescricao();
    },
    getDescricao: function(){
        return `Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundária: ${this.armaSecundaria}
Velocidade: ${this.velocidade}
Força: ${this.forca}
Resistência: ${this.resistencia}`;
    }
};

let personagens = [capitaoAmerica, homemDeFerro, thor, hulk, viuvaNegra, thanos];
let atributos = ["velocidade", "forca", "resistencia"];

for (let i = 0; i < personagens.length; i++) {
    for (let j = 0; j < personagens.length; j++) {
        if (i !== j) {
            console.log("==========================================");
            console.log(`Comparando: ${personagens[i].codinome} vs ${personagens[j].codinome}`);
            console.log();
            console.log(`Detalhes: \n${personagens[i].descricao()}\n`);
            console.log(`Detalhes: \n${personagens[j].descricao()}`);
            console.log("------------------------------------------");

            let vitoriasPersonagem1 = 0;
            let vitoriasPersonagem2 = 0;
            let empates = 0;

            for (let atributo of atributos) {
                let vencedor = comparar(personagens[i], personagens[j], atributo);

                console.log(`${atributo.toUpperCase()}: ${personagens[i][atributo]} vs ${personagens[j][atributo]} → Vencedor: ${vencedor}`);

                if (vencedor === personagens[i].codinome) {
                    vitoriasPersonagem1++;
                } else if (vencedor === personagens[j].codinome) {
                    vitoriasPersonagem2++;
                } else {
                    empates++;
                }
            }

            let vencedorFinal;
            if (vitoriasPersonagem1 > vitoriasPersonagem2) {
                vencedorFinal = personagens[i].codinome;
            } else if (vitoriasPersonagem2 > vitoriasPersonagem1) {
                vencedorFinal = personagens[j].codinome;
            } else {
                vencedorFinal = "EMPATE";
            }

            console.log("VENCEDOR FINAL: " + vencedorFinal);
            console.log("==========================================\n");
        }
    }
}

function comparar(personagem1, personagem2, atributo) {
    if (personagem1[atributo] > personagem2[atributo]) {
        return personagem1.codinome;
    } else if (personagem2[atributo] > personagem1[atributo]) {
        return personagem2.codinome;
    }
    return "Empate";
}