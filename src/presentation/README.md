# Presentation

A camada de `Presentation` contém tudo(ou quase tudo) que é direta ou indiretamente exposto ao usuário.

- `/assets` -> contém o conteúdo de mídia e imagens que são utilizados na aplicação.

- `/components` -> é destinado aos componentes globais que são utilizados nas páginas da aplicação.

Obs: apesar de o diretório de `components` ser destinado a componentes globais da aplicaçãoo, nada impede de que no diretório `/pages`, relacionados as páginas da aplicação, tenha um diretório `/components` para os componentes que fazem parte daquele contexto apenas. Caso haja a necessidade de generalizar e/ou utilizar tais componentes locais em um contexto global. Fica fácil trocar o contexto deles.

- `/hooks` -> contém todos os React Custom Hooks que os desenvolvedores criarem e/ou aplicarem dentro da aplicação.

- `/pages` -> contém os componente de cada página. Eventualmente esses componentes são injetados no mux das rotas no `/main/routes`.

- `/styles` -> contém todos os estilos globais da aplicação.

- `/test` -> contém os mocks da camada de presentation e não os testes em si como se pode erroneamente achar. Os testes, sejam eles de integração ou unitários são realizados em um diretório `/test` dentro do componente que se quer testar. Neste contexto mais acima, esses mocks são referentes a estruturas básicas do contexto de cada página a ser textada.

- `/utils` -> contém utilidades genéricas que não se encaixam em outros contextos. O certo é evitar fazer o uso desse diretório. Caso haja a real necessidade de se utilizar um pacote com esse nome, o recomendado é separar ele em um sub-contexto que faz sentido de acordo com sua funcionalidade.
