# Name do Projeto: unit_test

#

<table class="descricao">
<td>
  <div>
    <img width="40" height="40" src="https://img.icons8.com/nolan/64/project.png" alt="project"/>
  </div>
</td>

<td>
  <div>

### Descrição do projeto:

  </div>
</td>

</table>

Este projeto em JavaScript é um exemplo simples de testes unitários utilizando a biblioteca Jest. Ele consiste em dois arquivos:

-   `code.js`: Este arquivo contém algumas funções matemáticas e uma função de tempo.

-   `test.js`: Aqui estão os testes para as funções definidas em code.js.

#

<table class="descricao-detalhada>
<td>
  <div>
    <img width="48" height="48" src="https://img.icons8.com/color/48/documents-folder.png" alt="documents-folder"/>
  </div>
</td>

<td>
<div>

### Descrição detalhada de cada parte do projeto:</div></td>

</table>

### Arquivo - `code.js`

`sum(a, b)`: Esta função recebe dois números como argumentos e retorna a soma deles.

`subtract(a, b)`: Esta função recebe dois números como argumentos e retorna a subtração do primeiro pelo segundo.

`inOneHour()`: Esta função retorna o timestamp atual acrescido de uma hora (3600000 milissegundos).

#### Arquivo - `test.js`

Este arquivo contém testes para as funções definidas em code.js. Ele está organizado em dois blocos de teste:

1 - Testes de funções matemáticas:

`sums 2 numbers`: Testa se a função sum está somando corretamente dois números.

`subtracts 2 numbers`: Testa se a função subtract está subtraindo corretamente dois números.

2 -Testes de funções de tempo:

`returns the timestamp for one hour ahead`: Testa se a função `inOneHour` retorna o timestamp correto para uma hora à frente. Para este teste, é utilizado o jest.fn() para simular o Date.now() retornando sempre 0, o que permite a previsibilidade nos cálculos de tempo.

Além disso, este arquivo também mostra o uso de hooks de ciclo de vida do Jest, como `beforeAll`, `beforeEach`, `afterAll` e `afterEach`, que são comentados. Esses hooks podem ser usados para executar determinadas ações antes ou depois de cada teste ou bloco de testes, ou antes ou depois de todos os testes. Eles são úteis para configurações de teste e limpeza. No caso deste projeto, eles não estão sendo utilizados, mas podem ser descomentados e utilizados conforme necessário.

#

<table class="clone" border="0px">
<td>
  <div>
  <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>

  </div>
</td>
<td>
  <div>

### Para fazer o clone:

  </div>
</td>
</table>

`mkdir` nome-do-projeto

`cd` nome-do-projeto

`git clone` [https://github.com/WMS66/unit_test](https://github.com/WMS66/unit_test)

#

### Para rodar o teste:

`yarn test`

Dentro da pasta do projeto.
