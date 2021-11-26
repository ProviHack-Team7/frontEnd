# Data

Data contém a camada de serviços internos da aplicação.

- `/l10n` é o serviço de internacionalização da aplicação assim como suas configurações iniciais. Veja que do jeito que se é posto o serviço nessa camada, fica fácil de trocá-lo caso precise ou opte-se em mudá-lo como por exemplo se escolha utilizar o i18n.

- `/lang` é o arquivo que contém o json com as internacionalizações da aplicação. Ele fica destacado e fora do `/l10n` justamente pelo fato que se resolverem migrar para o `/i18n` não afetaria na mudança dos textos e não precisaria mudar o padrão dos textos da aplicação.

- `/store` contém a camada de controle de estado da aplicação. Seja ele MobX, Flux, Redux, Redux/Toolkit etc...
