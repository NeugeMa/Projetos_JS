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

// Utilizando o método filter() para obter salários acima de 2500
const salariosAcima2500 = salariosComAumento.filter(salario => salario > 2500);

// Utilizando o método reduce() para somar os salários acima de 2500
const totalSalariosAcima2500 = salariosAcima2500.reduce((total, salario) => total + salario, 0);

// Exibir resultados no console
console.log("Salários com aumento:", salariosComAumento);
console.log("Salários acima de 2500:", salariosAcima2500);
console.log("Total dos salários acima de 2500:", totalSalariosAcima2500);



