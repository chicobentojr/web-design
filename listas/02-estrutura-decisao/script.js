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
        } else if (delta > 0) {
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
      num = parseInt(prompt("Digite um número:"));
      if (num > 0 && num < 1000) {
        cen = parseInt(num / 100);
        dez = parseInt((num - cen * 100) / 10);
        uni = parseInt(num - cen * 100 - dez * 10);

        quantidade = 0;
        quantidade += cen ? 1 : 0;
        quantidade += dez ? 1 : 0;
        quantidade += uni ? 1 : 0;

        espacos = cen && dez && uni ? [" , ", " e "] :
                  (cen && dez) || (cen && uni) ? [" e ", ""] :
                  (dez && uni) ? ["", " e "] :
                  ["", ""];


        // espacos = quantidade == 3 ? [" , ", " e "] : quantidade == 2 ? [" e ", ""] : ["",""];

        msg = cen > 0 ? cen + " centena" : "";
        msg += cen > 1 ? "s" : "";

        msg += espacos[0];

        msg += dez > 0 ? dez + " dezena" : "";
        msg += dez > 1 ? "s" : "";

        msg += espacos[1];

        msg += uni > 0 ? uni + " unidade" : "";
        msg += uni > 1 ? "s" : "";

        alert(msg);

      } else {
        alert("Número inválido");
      }
    },
    function questao_20() {
      n1 = parseFloat(prompt("Digite a primeira nota"));
      n2 = parseFloat(prompt("Digite a segunda nota"));
      n3 = parseFloat(prompt("Digite a terceira nota"));
      media = (n1 + n2 + n3) / 3;
      if (media == 10.0) {
        alert("Aprovado com Distinção");
      } else if (media >= 7) {
        alert("Aprovado");
      } else {
        alert("Reprovado");
      }
    },
    function questao_21() {
      valor = parseInt(prompt("Digite o valor para saque:"));
      if (valor >=10 && valor <= 600){
        notas = [100,50,10,5,1];
        selecionadas = [];
        notas.forEach(function (nota){
          quantidade = 0;
          if (valor >= nota) {
            quantidade = parseInt(valor / nota);
            valor -= quantidade * nota;
          }
          selecionadas.push(quantidade);
        });

        mensagem = "As notas são:... \n";

        selecionadas.forEach(function(selecionada, index){
          if (selecionada > 0) {
            mensagem += selecionada + " nota(s) de R$ " + notas[index] + ",00 \n";
          }
        });
        alert(mensagem);
      } else {
        alert("Valor indisponível!");
      }
    },
    function questao_22() {
      n1 = parseInt(prompt("Digite um número:"));
      if (n1 % 2 == 0) {
        alert("O número é par");
      } else {
        alert("O número é impar");
      }
    },
    function questao_23() {
      n1 = parseFloat(prompt("Digite um número:"));
      if (n1 == Math.round(n1)) {
        alert("O número é inteiro");
      } else {
        alert("O número é decimal");
      }
    },
    function questao_24() {
      n1 = parseFloat(prompt("Digite o primeiro número:"));
      n2 = parseFloat(prompt("Digite o segundo número:"));
      operacoes = [
        n1 + n2,
        n1 - n2,
        n1 * n2,
        n1 / n2,
      ]
      op = parseInt(prompt(
        "Selecione a operação \n" +
        "1 - Soma \n" +
        "2 - Subtração \n" +
        "3 - Multiplicação \n" +
        "4 - Divisão"));

      if (op >= 1 && op <= 4){
        index = op - 1;
        res = operacoes[index];
        par = res % 2 == 0 ? "Par" : "Impar";
        positivo = res > 0 ? "Positivo" : "Negativo";
        inteiro = res == Math.round(res) ? "Inteiro" : "Decimal";

        alert("O seu resultado é: " + res + "\n" +
              "Ele é: " + [par, positivo, inteiro].toString());

      } else {
        alert("Código da operação inválida!");
      }

    },
    function questao_25() {
      perguntas = [
        "Telefonou para a vitima?",
        "Esteve no local do crime?",
        "Mora perto da vítima?",
        "Devia para a vítima?",
        "Já trabalhou com a vítima?",
      ];

      respostas = [];
      for (i = 0; i < perguntas.length; i++){
        op = parseInt(prompt(
          perguntas[i] + "\n\n" +
          "Digite: \n" +
          "1 - Sim \n" +
          "2 - Não \n"));
        respostas[i] = op == 1;
      }
      verdades = 0;
      respostas.forEach(function(resposta){
        if (resposta) {
          verdades += 1;
        }
      });

      classificacao = "Inocente";

      switch (verdades) {
        case 2:
          classificacao = "Suspeita";
          break;
        case 3:
        case 4:
          classificacao = "Cúmplice";
          break;
        case 5:
          classificacao = "Assassino";
      }

      alert("Sua classificação é: " + classificacao);

    },
    function questao_26() {
      litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
      combustivel = prompt("Digite o tipo de combustivel obtido:");

      tabela = {
        "A": {
          preco: 1.90,
          desconto: [0.03, 0.05]
        },
        "G": {
          preco: 2.50,
          desconto: [0.04, 0.06]
        }
      };

      combustivel = combustivel.toUpperCase();

      if (combustivel == "A" || combustivel == "G"){

        preco = litros * tabela[combustivel].preco;
        desconto_tipo = litros <= 20 ? 0 : 1;
        preco -= tabela[combustivel].desconto[desconto_tipo] * preco;

        alert(litros + " litros de "+(combustivel == "G" ? "Gasolina" : "Álcool") + " vai custar R$: " + preco);

      } else {
        alert("Combustível inválido!");
      }
    },
    function questao_27() {
      morango = parseFloat(prompt("Digite quantos quilos você comprou de Morango:"));
      maca = parseFloat(prompt("Digite quantos quilos você comprou de Maça:"));

      tabela = {
        "morango": {
          preco: [2.50, 2.20],
          tipo: morango > 5 ? 1 : 0,
        },
        "maca": {
          preco: [1.80, 1.50],
          tipo: maca > 5 ? 1 : 0,
        }
      };
      peso = morango + maca;

      preco = (tabela.morango.preco[tabela.morango.tipo] * morango) + (tabela.maca.preco[tabela.maca.tipo] * maca);

      if (peso > 8 || preco > 25){
        preco -= preco * 0.10;
      }

      alert(morango + " Kg de Morango mais " + maca + " Kg de Maçã vão custar R$" + preco);
    },
    function questao_28() {
      tipo = parseInt(prompt(
          "Digite o tipo da carne que você quer comprar:\n\n" +
          "1 - Filé Duplo \n" +
          "2 - Alcatra \n" +
          "3 - Picanha \n"));

      quantidade = parseInt(prompt("Quantos quilos você quer?"));
      cartao = parseInt(prompt(
          "Você vai usar o Cartão Tabajara:\n\n" +
          "1 - Sim \n" +
          "2 - Não \n"));

      tabela = {
        1: { preco: [4.90, 5.80], },
        2: { preco: [5.90, 6.80], },
        3: { preco: [6.90, 7.80], },
      };

      carne = ["Filé Duplo", "Alcatra", "Picanha"][tipo -1];
      valor = quantidade > 5 ? tabela[tipo].preco[1] : tabela[tipo].preco[0];
      total = quantidade * valor;
      desconto = cartao == 1 ? 0.05 * total : 0;
      pagar = total - desconto;

      alert("    >> Cupom Fiscal <<" +
        "\n" + "Tipo de Carne:    " + carne +
        "\n" + "Quantidade (Kg):    " + quantidade +
        "\n" + "Preço Total:    R$ " + total +
        "\n" + "Tipo do Pagamento:     " + (cartao == 1 ? "Cartão" : "Dinheiro") +
        "\n" + "Valor do Desconto:    R$ " + desconto +
        "\n" + "Valor a Pagar:    R$ " + pagar);
      },
    ];
  while (true) {
    var opcao = parseInt(window.prompt("Digite o número da questão que você quer executar:"));
    questoes[opcao - 1]();
  }
})();
