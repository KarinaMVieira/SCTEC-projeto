class Vaga{
    constructor (empresa, cargo, requisitos, salario, modalidade){
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
};

class VagaFrontEnd extends Vaga{
    constructor (empresa, cargo, requisitos, salario, modalidade, nivel){
        super (empresa, cargo, requisitos, salario, modalidade);
        this.nivel = nivel;
    }

    exibirNivel(){
        return `Nível da vaga: ${this.nivel}`;
    }
}

const listaDeVagas = [
    new VagaFrontEnd ("TechStart", "Desenvolvedor Front-End", ["JavaScript", "Github", "Lógica de Programação", "TypeScript"], 2800, "Remoto", "Júnior"),
    new VagaFrontEnd ("CodeLab", "Front-End", ["JavaScript", "React", "Github", "Kanban"], 1800, "Híbrido", "Estágio"),
    new VagaFrontEnd ("WebSolutions", "Programador JavaScript", ["JavaScript", "Arrays", "Objeto", "Funções", "Html"], 3000, "Presencial", "Júnior")
];

const candidato = {
    nome: "Júlia",
    area: "Front-End",
    habilidades: ["JavaScript", "Github", "Lógica de Programação"],
    experienciaMeses: 4
};

let habilidadesCandidato = candidato.habilidades;
let resumoVagas = [];
let todasFaltantes = [];

listaDeVagas.forEach((itemVaga) => {
    let precisa = itemVaga.requisitos;
    
    let possui = precisa.filter ((item) => {
        return habilidadesCandidato.includes (item);
    });

    let falta = precisa.filter((item) => {
        return !habilidadesCandidato.includes(item);
    });

    let qtdPossui = possui.length;
    let qtd = precisa.length;

    let porcentagem = Math.round((qtdPossui*100)/qtd);

    console.log (`Empresa: ${itemVaga.empresa}`);
    console.log (`Cargo: ${itemVaga.cargo}`);
    console.log (itemVaga.exibirNivel());
    console.log (`Compatibilidade: ${(porcentagem)}%`);
    console.log (`Habilidades que deram match: ${possui.join(", ")}`);

     if (falta.length === 0) {
        console.log ("Habilidades que faltam: Você tem todos os requisitos!");
    } else {
        console.log (`Habilidades que faltam: ${falta.join(", ")}`);
    }

    switch (true){
        case (porcentagem >= 80):
            console.log ("Classificação: Você possui alta compatibilidade com a vaga.")
        break;
        case (porcentagem >= 50):
            console.log ("Classificação: Você possui média compatibilidade com a vaga.")
        break;
        default:
            console.log ("Classificação: Você possui baixa compatibilidade com a vaga.")
    }

     resumoVagas.push({
        empresa: itemVaga.empresa,
        cargo: itemVaga.cargo,
        compatibilidade: porcentagem
    });

    todasFaltantes.push(...falta);

    console.log ("................................................................\n");
});

const vagaMaisCompativel = resumoVagas.reduce ((melhorVaga, vagaAtual) => {
    if(vagaAtual.compatibilidade > melhorVaga.compatibilidade){
        return vagaAtual;
    }
    return melhorVaga;
});

console.log ("Vaga mais compatível");
console.log (`Empresa: ${vagaMaisCompativel.empresa}`);
console.log (`Cargo: ${vagaMaisCompativel.cargo}`);
console.log (`Compatibilidade: ${vagaMaisCompativel.compatibilidade}%`);
console.log ("................................................................\n");

let habilidadesSemRepeticao = [...new Set(todasFaltantes)]; //evita mostrar duplicado

console.log ("Recomendação de estudo:");
console.log (`Priorize estudar ${habilidadesSemRepeticao.join(", ")}, pois esses conteúdos aparecem nas vagas analisadas.`);
console.log ("................................................................\n");