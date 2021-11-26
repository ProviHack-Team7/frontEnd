# Main

Contém o core de exposição, sub-inicialização e até mesmo proxy da aplicação. Routes e as factories que são injetadas nos componentes e/ou contexto das rotas são alocados nessa camada.

- `/routes` -> contém o mux que faz o roteamento interno da aplicação.

- `/factories` -> cuida da injeção de validadores e outros contextos aos componentes que serão renderizados.
