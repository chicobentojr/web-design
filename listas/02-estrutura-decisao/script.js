(function() {
  var questoes = [
    function questao_01() {
      n1 = parseInt(prompt("Digite um número:"));
      n2 = parseInt(prompt("Digite outro número:"));
      if (n1 > n2) {
        alert("O maior é: " + n1);
      } else {
        alert("O maior é: " + n2);
      }
    },
    function questao_02() {
      n1 = parseInt(prompt("Digite um número:"));
      if (n1 >= 0) {
        alert("O número é positivo");
      } else {
        alert("O número é negativo");
      }
    },
    function questao_03() {
      sexo = prompt("Insira a sigla do sexo:");
      if (sexo == "M") {
        alert("Sexo Masculino");
      } else if (sexo == "F") {
        alert("Sexo Feminino");
      } else {
        alert("Sexo Inválido");
      }
    },
    function questao_04() {
      letra = prompt("Digite uma letra").toLowerCase();
      switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          alert("Vogal");
          break;
        default:
          alert("Consoante");
      }
    },
    function questao_05() {
      n1 = parseFloat(prompt("Digite a primeira nota"));
      n2 = parseFloat(prompt("Digite a segunda nota"));
      media = (n1 + n2) / 2;
      if (media == 10.0) {
        alert("Aprovado com Distinção");
      } else if (media >= 7) {
        alert("Aprovado");
      } else {
        alert("Reprovado");
      }
    },
    function questao_06() {
      numeros = [];
      for (i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Digite um número:"));
      }
      numeros = numeros.sort();
      alert("Maior número: " + numeros[numeros.length - 1]);
    },
    function questao_07() {
      numeros = [];
      for (i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Digite um número:"));
      }
      numeros = numeros.sort();
      alert("Maior número: " + numeros[numeros.length - 1] +
        "Menor número: " + numeros[0]);
    },
    function questao_08() {
      produtos = [];
      for (i = 0; i < 3; i++) {
        produtos[i] = parseFloat(prompt("Digite o preço do produto:"));
      }
      produtos = produtos.sort();
      alert("Compre o produto que custa R$ " + produtos[0]);
    },
    function questao_09() {
      numeros = [];
      for (i = 0; i < 3; i++) {
        numeros[i] = parseFloat(prompt("Digite um número:"));
      }
      numeros = numeros.sort().reverse();
      alert("Os números em ordem decrescente: " + numeros.toString());
    },
    function questao_10() {
      turno = prompt("Insira o turno que você estuda:").toUpperCase();
      switch (turno) {
        case "M":
          alert("Bom Dia!");
          break;
        case "V":
          alert("Boa Tarde!");
          break;
        case "N":
          alert("Boa Noite!");
          break;
        default:
          alert("Valor Inválido");
          break;
      }
    },
    function questao_11() {
      salario = parseFloat(prompt("Digite o valor do seu salário:"));

      aumento = salario <= 280 ? 20 : salario <= 700 ? 15 : salario <= 1500 ? 10 : 5;
      aumento_valor = (aumento / 100) * salario;

      alert("Salário antes do reajuste : R$ " + salario +
        "\n" + "Aumento aplicado (em %) : " + aumento + "%" +
        "\n" + "Aumento aplicado (em R$) : R$ " + aumento_valor +
        "\n" + "Novo Salário : R$ " + (salario + aumento_valor));
    },
    function questao_12() {
      hora = parseFloat(window.prompt("Digite quanto você ganha por hora:"));
      valor = parseFloat(window.prompt("Digite quantas horas você trabalha por mês:"));

      bruto = hora * valor;
      ir_perc = bruto <= 900 ? 0 : bruto <= 1500 ? 5 : bruto <= 2500 ? 10 : 20;
      renda = bruto * ir_perc / 100;
      inss = bruto * 0.10;
      sindicato = bruto * 0.05;

      alert("Salário Bruto: (" + hora + " * " + valor + ")   : R$ " + bruto +
        "\n" + "(-) IR (" + ir_perc + "%)                    : R$ " + renda +
        "\n" + "(-) INSS (" + 10 + "%)      : R$ " + (bruto * 10 / 100) +
        "\n" + "FGTS (" + 11 + "%)      : R$ " + (bruto * 11 / 100) +
        "\n" + "Total de descontos : R$ " + (renda + inss) +
        "\n" + "Salário Liquido : R$ " + (bruto - renda - inss));
    },
    function questao_13() {
      dia = parseInt(prompt("Digite o número do dia:"));
      switch (dia) {
        case 1:
          alert("Domingo");
          break;
        case 2:
          alert("Segunda");
          break;
        case 3:
          alert("Terça");
          break;
        case 4:
          alert("Quarta");
          break;
        case 5:
          alert("Quinta");
          break;
        case 6:
          alert("Sexta");
          break;
        case 7:
          alert("Sábado");
          break;
        default:
          alert("Valor Inválido");
          break;
      }
    },
    function questao_14() {
      n1 = parseFloat(prompt("Digite a primeira nota"));
      n2 = parseFloat(prompt("Digite a segunda nota"));
      media = (n1 + n2) / 2;
      conceito = "";
      mensagem = "";
      if (media >= 6.0) {
        mensagem = "APROVADO";
        if (media >= 9.0) conceito = "A";
        else if (media >= 7.5) conceito = "B";
        else conceito = "C";
      } else {
        mensagem = "REPROVADO";
        if (media >= 4.0) conceito = "D";
        else conceito = "E";
      }
      alert("Sua média é: " + media + ", seu conceito é: " + conceito + " e sua situação é: " + mensagem);
    },
    function questao_15() {
      lados = [];
      for (i = 0; i < 3; i++) {
        lados[i] = parseFloat(prompt("Digite o lado do triângulo:"));
      }
      if (lados[0] < lados[1] + lados[2] && lados[1] < lados[0] + lados[2] && lados[2] < lados[1] + lados[0]) {
        if (lados[0] == lados[1] && lados[1] == lados[2]) {
          alert("Triângulo Equilátero");
        } else if (lados[0] == lados[1] || lados[1] == lados[2] || lados[0] == lados[2]) {
          alert("Triângulo Isósceles");
        } else {
          alert("Triângulo Escaleno");
        }
      } else {
        alert("Os lados não podem formar um triângulo");
      }
    },
    function questao_16() {
      a = parseFloat(prompt("Digite o valor de a:"));
      if (a == 0) {
        alert("Isso não é uma equação do segundo grau");
      } else {
        b = parseFloat(prompt("Digite o valor de b:"));
        c = parseFloat(prompt("Digite o valor de c:"));

        delta = (b * b) - 4 * a * c;

        if (delta < 0) {
          alert("A equação não possui raízes");
        } else if (delta >= 0) {
          x1 = ((-1 * b) - (Math.sqrt(delta))) / (2 * a);
          x2 = ((-1 * b) + (Math.sqrt(delta))) / (2 * a);
          alert("As raizes da equação é: " + x1 + " e " + x2);
        } else {
          x1 = (-1 * b) / (2 * a);
          alert("A raiz da equação é: " + x1);
        }
      }
    },
    function questao_17() {
      ano = parseInt(prompt("Digite um ano:"));
      if (ano % 4 == 0) {
        alert("É ano bissexto");
      } else {
        alert("Não é ano bissexto");
      }
    },
    function questao_18() {
      data = prompt("Digite uma data no formato dd/mm/aaaa");
      campos = data.split('/');
      dia = campos[0];
      mes = campos[1];
      ano = campos[2];

      if (dia <= 31 && dia >= 0 && mes <= 12 && mes >= 0) {
        alert("Data válida");
      }
      else {
        alert("Data inválida");
      }
    },
    function questao_19() {
      valor = parseInt(prompt("Digite um número:"));

      centena = valor = 0 ? "" : valor > 1
    },
    function questao_20() {},
    function questao_21() {},
    function questao_22() {},
    function questao_23() {},
    function questao_24() {},
    function questao_25() {},
    function questao_26() {},
    function questao_27() {},
    function questao_28() {},
  ];

  while (true) {
    var opcao = parseInt(window.prompt("Digite o número da questão que você quer executar:"));
    questoes[opcao - 1]();
  }
})();
