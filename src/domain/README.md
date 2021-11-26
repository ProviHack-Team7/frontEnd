# Domain

A ideia da utilização da camada de domínio da aplicação é lidar com o contexto exterior dela. Em outras palavras seria relacionado as models que fazem relação com conteúdo externo vindo de fora, por uma API, por exemplo; assim como os controladores/casos que fazem chamadas externas a aplicação, como a uma API.

- `/models` -> detém as models de contexto externo(e/ou interno) da aplicação.

- `/usecases` -> contém dos casos/controllers que fazem chamadas externas a aplicação como a uma API, por exemplo. Contém as classes que contém os métodos das chamadas externas de cada contexto.

- `/test` -> é destinado aos mocks da camada de `/domain` e não a testes unitários dessa camada.
