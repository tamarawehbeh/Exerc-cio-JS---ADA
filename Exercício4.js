const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
  ];

function mediaAlunos(alunos) {
    let media = 0, medias = []
    for (let i = 0; i < alunos.length; i++) {
        media = alunos[i].notas.reduce((acumulador, valorAtual) => {
            return Math.round(acumulador + valorAtual / alunos[0].notas.length)
        }, 0)
        medias.push(media)
        //alunos[i].media = media
    }

    alunos.map((aluno, index) => {aluno.media = medias[index]})

    for (let i = 0; i < alunos.length; i++) {
        delete alunos[i].notas
    }

    return alunos
}

console.log(mediaAlunos(alunos))


