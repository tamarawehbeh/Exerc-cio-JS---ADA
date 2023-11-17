const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ];
  
function verificar(empregados){
    
    const salario = (empregado) => empregado.salario >= 1500

    const menorSalario = (empregado) => empregado.salario <= 1000

    return `
    Pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00: ${empregados.some(salario) ? "SIM" : "NÃO"}
    Pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00: ${empregados.some(menorSalario) ? "SIM" : "NÃO"}
    `
}


console.log(verificar(empregados));