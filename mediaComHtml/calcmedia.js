let mediaFinal1 = document.querySelector('.mediaAluno1');
let mediaFinal2 = document.querySelector('.mediaAluno2');

var lista = [
    aluno1 = {
        nome: 'Tiago dos Santos',
        disciplina: 'Matemática',
        notas: [6.5, 4.3, 2.1, 6.2]
    },
    aluno2 = {
        nome: 'Alex Carneiro',
        disciplina: 'Matemática',
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

for (let index = 0; index < lista.length; index++) {
    var aluno = lista[index];
    var somaDasNotas1 = 0;
    var somaDasNotas2 = 0;
    for (let iNota = 0; iNota < aluno1.notas.length; iNota++) {
        somaDasNotas1 += aluno1.notas[iNota]; 
    }
    for (let iNota = 0; iNota < aluno2.notas.length; iNota++) {
        somaDasNotas2 += aluno2.notas[iNota]; 
    }
    let mediaAluno1 = (somaDasNotas1 / 4).toFixed(1);
    let mediaAluno2 = (somaDasNotas2 / 4).toFixed(1);

    var dados1 = (`Aluno: ${aluno1.nome} - Disciplina: ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${mediaAluno1 >= 6 ? "Aprovado" : "Reprovado"}`);
    var dados2 = (`Aluno: ${aluno2.nome} - Disciplina: ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${mediaAluno2 >= 6 ? "Aprovado" : "Reprovado"}`);

    mediaFinal1.innerHTML = dados1;
    mediaFinal2.innerHTML = dados2;
}