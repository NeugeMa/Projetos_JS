// Array contendo 10 valores de salário
const salarios = [1500, 2200, 1800, 2800, 1900, 2100, 2500, 1700, 3000, 2400];

// Método map() para aplicar aumento de salários
const salariosComAumento = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15; // 15% de aumento
  } else {
    return salario * 1.1; // 10% de aumento
  }
});

// Método filter() para obter salários acima de 2500
const salariosAcima2500 = salariosComAumento.filter(salario => salario > 2500);

// Método reduce() para somar os salários acima de 2500
const totalSalariosAcima2500 = salariosAcima2500.reduce((total, salario) => total + salario, 0);

// Exibir resultados no console
console.log("Salários com aumento:", salariosComAumento);
console.log("Salários acima de 2500:", salariosAcima2500);
console.log("Total dos salários acima de 2500:", totalSalariosAcima2500);

// Explicanção código 
// No meu arquivo em JS (script.js), foi criado um array salarios contendo os valores de salário iniciais.

// E usando o método map() para percorrer o array salarios e aplicar os aumentos de salário 

// Método filter() para criar um novo array salarios que deve ser Acima2500 que contém apenas os 
// salários acima de 2500.

// E por fim usei o método reduce() para somar os valores do array salariosAcima2500.

