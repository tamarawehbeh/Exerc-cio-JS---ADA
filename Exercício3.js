const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
  ];

  function calculoImc(pessoas){
    for (let i = 0; i < pessoas.length; i++) {
        let pessoa = pessoas[i]
        let imc = pessoa.peso / (pessoa.altura)**2
        pessoa.imc = Math.round(imc)
    }
    for(let i = 0; i < pessoas.length; i++){
        console.log(`O IMC de ${pessoas[i].nome} é ${pessoas[i].imc}`)    

    }
  }

  calculoImc(pessoas)