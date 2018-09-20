function beHappy(value) {

    let repeat = [];
  
    /**
     * Verifica se o valor é maior que 1 e se
     * o valor não é repetido, isso irá evitar
     * um loop infinito
     */
    while (value > 1 && !~repeat.indexOf(value)) {
      let result = 0;
  
      /**
       * Adiciona o valor para na variável
       * repeat para evitar o loop infinito
       */
      repeat.push(value);
  
      /* Quebra a string em pedaços */
      for (let n of value.toString().split("")) {
  
        /**
         * Utiliza o Math.pow para calcular a base
         * elevado ao expoente. É o mesmo que n * n
         */
        result += Math.pow(n, 2)
      }
  
      value = result;
    }
  
    return value == 1;
  }
  
  for (let i = 0; i <= 50; i++) {
    if (beHappy(i)) {
      console.log(i);
    }
  }