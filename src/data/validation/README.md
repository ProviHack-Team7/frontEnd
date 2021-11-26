# Validation

A Camada de `Validation` é destinada à lidar com validações, seja elas referentes a error, conferência de campos de formulários, protocolos, e outros.

- `/errors` -> validadores exclusivos da camada de erros da aplicação. Ao se estourar um erro de validação de algum validador da camada de `/validator` o erro formatado e tratado que é enviado ao usuário vem desta camada.

- `/protocols` -> camada que contém protocolos de validação.

- `/validation-composite` -> é o lugar em que se reune validadores para que possam ser injetados futuramente de acordo com cada contexto.

- `/validators` -> camada que contém os métodos de verificação de campos, dados, informações da aplicação.
