# Infra

Em tese, contém a classe mãe do cliente que faz chamadas externas a aplicação. A ideia é que apartir desse centro instancie-se nos controllers e implemente-se os métodos necessários para cada contexto nestas instâncias. A camada de infra cuidaria da base do Cliente/serviço de requisições da aplicação assim como de seus protocolos padrões.
