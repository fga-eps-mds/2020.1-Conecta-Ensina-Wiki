---
id: documentoArquitetura
title: Documento de arquitetura
sidebar_label: Documento de arquitetura
---

## Histórico de Versão

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 07/09/2020 | 0.1 | Criação do documento | Paulo |
| 08/09/2020 | 0.2 | Escopo | Denniel William |
| 09/09/2020 | 0.3 | Preenchimento | Denniel e Paulo |


## Introdução

### Objetivos

Este documento fornece uma visão geral da arquitetura abrangente do Conecta-Ensina. Apresenta várias visualizações de arquitetura para descrever os diferentes aspectos do sistema. Destina-se a transmitir aos interessados as decisões arquiteturais significativas que foram tomadas.


### Escopo

Este documento de arquitetura de _software_ fornece uma visão geral da arquitetura do aplicativo Conecta Ensina.


### Abreviações, acrônimos e definições

| Acrônimo | Definição |
|---|---|
| API | Application programming interface |
| iOS | Sistema operacional Apple |
| MVC | Model-View-Controller |
| UUID | Identificador único universal |

### Referências

* [Documentação do Vsign](https://fga-eps-mds.github.io/2019.2-Vsign/project/architectureDocument/)<br>
* [Documento de arquitetura de Software do “Sistema de Paginação de Esportes Universitários”](http://www.facom.ufu.br/~flavio/pds1/files/2016-01/Documento%20de%20Arquitetura%20de%20Software%20do%20SPEU%201-Exemplo-RUP.pdf)<br>


## Representação arquitetural

### Implementação

Para facilitar a integração do sistema em multiplataformas, foi utilizado a arquitetura de MVC, onde a model e controller estão separados no Back-End, possibilitando assim que se possa desenvolver quantos Fronts forem necessários integrados por um mesmo banco de dados.

#### Diagrama de Relações

![Diagrama de Relações](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/26_documento_de_arquitetura/website/static/img/diagrama_de_relacoes.png)

#### Back-End

O Back-End é desenvolvido em NodeJS com o banco relacional PostgreSQL.

![Arquitetura do Back-End](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/26_documento_de_arquitetura/website/static/img/back_end.png)

#### Front-End

Para o desenvolvimento do App Mobile, foi utilizado o React Native para a importação ao sistema iOS e Android, além da fácil integração com a API em NodeJS

![Arquitetura do Front-End](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/26_documento_de_arquitetura/website/static/img/front_end.png)

### Integração

Para a integração dos Fronts com a API, será necessário a comunicação por Json utilizado pelo HTTP.

![Integração da arquitetura](link da imagem completa)

### Deployment

[Plano de Gerenciamento de Configuração de Software](gerenciamentoConfiguracaoSoftware)

### Banco de dados

Para a persistência de dados, será utilizado o sistema gerenciador de banco de dados PostgreSQL.

O PostgreSQL possui excelente integração com o NodeJS. Isso permite a utilização de UUID para colunas ID do tipo primary key, além oferecer uma gama de tipos de dados, auxiliando no desenvolvimento de um bom projeto de banco de dados.
![Modelagem do Banco de Dados](link)

## Metas e restrições arquiteturais

### Metas

* Acoplamento: Foi separado as views da API de forma a atender qualquer exigência do cliente a novas tecnologias integradas em um mesmo banco de dados. Dessa forma, podemos focar em fazer uma API concreta para utilização em diversas plataformas, assim como diversas aplicações que integradas.

* Evolução: A necessidade do desenvolvimento de novas funcionalidades poderá ser feita de forma independente na API e na interface de usuário, inclusive, adotando outras tecnologias, desde que a integração entre as duas frentes seja mantida.

### Restrições

* Expertise - A equipe não possui muito experiência de desenvolvimento nas tecnologias escolhidas. Entretanto, sabendo de tal restrição, buscou-se elaborar um Plano de Gerenciamento de Riscos para que o projeto possa ser desenvolvido com êxito.

* Tecnologia: Se tratando de tecnologias emergentes, há muitas mudanças de versões que devem ser levadas em consideração na hora de adotar qualquer biblioteca.

## Visualização dos casos de uso

![Especificação dos casos de uso](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/diagramaCasoDeUso.svg)


## Qualidade

Na API, os padrões adotados no projeto seguirão convenções do framework NodeJS, que são amplamente utilizados por projetos de diversos tamanhos.

Na interface de usuário, a utilização do React, permitirá que o desenvolvimento seja realizado de forma eficiente e componentizado, com facilidade de integração com outras bibliotecas e serviços.

Os desenvolvedores do projeto também farão uso das folhas de estilo das linguagens de programação adotadas e contarão com ferramentas de análise estática, para assegurar que o desenvolvimento está de acordo com os requisitos de boas práticas de desenvolvimento de software.

