const candidato = {
    nome: "Júlia",
    area: "Front-End",
    habilidades: ["JavaScript", "Github", "Lógica de Programação"],
    experienciaMeses: 4
};

const vaga = [
    {
    id:1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "Github", "Lógica de Programação", "TypeScript"],
    salario: 2800,
    modalidade: "Remoto"
    },
    {
    id:2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "React", "Github", "Kanban"],
    salario: 1800,
    modalidade: "Híbrido"
    },
    {
    id:3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objeto", "Funções", "Html"],
    salario: 3000,
    modalidade: "Presencial"
    }
];

let habilidadesCandidato = candidato.habilidades;
let resumoVagas = [];

vaga.forEach((itemVaga) => {
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

    console.log ("................................................................\n");
});