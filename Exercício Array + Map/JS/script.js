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



