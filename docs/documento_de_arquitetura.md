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
| 10/09/2020 | 0.4 | Finalização dos demais diagramas | Denniel |
| 11/09/2020 | 0.5 | Arrumando links | Paulo |


## Introdução

### Objetivos

Este documento fornece uma visão geral da arquitetura abrangente do Conecta-Ensina. Apresenta várias visualizações de arquitetura para descrever os diferentes aspectos do sistema. Destina-se a transmitir aos interessados as decisões arquiteturais significativas que foram tomadas.


### Escopo

O Conecta Ensina  é um projeto de aulas particulares dadas por professores formados ou alunos de graduação. O usuário terá a possibilidade de agendar aulas de acordo com a disciplina  e horário desejado.


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

O modelo de arquitetura proposta no projeto é um modelo multicamada, possuindo três principais camadas, sendo elas: 
* **Visão:** camada em que os dados são visualizados a partir de uma interface gráfica implementada.
* **Controladoras:** camada em que há o  tratamento e interpretação dos eventos gerados por dispositivos de entrada. Para manipular e tratar esses dados de entrada é utilizado o ExpressJS.
* **Modelo:** camada em que há persistência dos dados, sendo composto pelo banco de dados relacional PostgreSQL.
 
A comunicação entre as camadas é feita pelo modelo de arquitetura cliente-servidor, sendo o servidor representado pela camada intermediária (Controladoras), tendo a responsabilidade de lidar com a camada de persistência (Modelo), que fornece os dados para manipulação e com a camada de visualização (Visão), que apresenta pela interface gráfica os dados manipulados, no qual são requisitados por meio do protocolo de comunicação http com as outras camadas. O cliente nesse modelo realiza as requisições e interage com a interface gráfica. 

![Arquitetura do Back-End](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/arquitetura.png)

* **Node.js:** Pode ser definido com um ambiente de execução Javascript server-side, sendo possível rodar uma aplicação standalone em uma máquina, não dependendo de um browser parar a execução.

* **React Native:** Biblioteca Javascript criada pelo Facebook, que é utilizada para o desenvolvimento da interface gráfica para os sistemas de Android e iOS de forma nativa. Por conta do desenvolvimento ocorrer de forma nativa, o desempenho do software se torna superior às demais tecnologias concorrentes.

* **Express JS:** Framework para Node.js, utilizado no back-end para o gerenciamento de rotas, middleware e de outras funções, facilitando a criação de API 's. Sendo responsável por realizar a conexão entre as camadas de persistência e de controle com a camada de visão.

* **Jest:** Framework de testes criado pelo Facebook projetado para garantir a correção de código Javascript.

* **ESLint:** Ferramenta de análise de código estática para identificar padrões problemáticos encontrados em código Javascript, auxiliando no processo de refatoração do código.

* **Sequelize:** Definido como um ORM(Object-Relational Mapper) para Node.js, o sequelize tem suporte para PostgreSQL, realizando o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.

* **PostgreSQL:** O banco de dados escolhido para o projeto, pois possui excelente integração com a Node.js. Isso permite a utilização de UUID para colunas ID do tipo primary key, além oferecer uma gama de tipos de dados, auxiliando no desenvolvimento de um bom projeto de banco de dados.


#### Back-End
Estrutura de pacotes do back-end.

![Arquitetura do Back-End](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/back_end.png)

#### Front-End
Estrutura de pacotes do front-end.

![Arquitetura do Front-End](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/front_end.png)


#### [Modelagem do Banco de Dados](modelagemDoBancoDeDados)

## Metas e restrições arquiteturais

### Metas

Criação de um aplicativo para aparelhos móveis com a finalidade de permitir o usuário contratar aulas particulares de acordo com o horário e disciplina desejadas. 

* **Acoplamento:** Foi separado as views da API de forma a atender qualquer exigência do cliente a novas tecnologias integradas em um mesmo banco de dados. Dessa forma, podemos focar em fazer uma API concreta para utilização em diversas plataformas, assim como diversas aplicações que integradas.

* **Evolução:** A necessidade do desenvolvimento de novas funcionalidades poderá ser feita de forma independente na API e na interface de usuário, inclusive, adotando outras tecnologias, desde que a integração entre as duas frentes seja mantida.

### Restrições

* **Expertise:** A equipe não possui muito experiência de desenvolvimento nas tecnologias escolhidas. Entretanto, sabendo de tal restrição, buscou-se elaborar um Plano de Gerenciamento de Riscos para que o projeto possa ser desenvolvido com êxito.

* **Tecnologia:** Se tratando de tecnologias emergentes, há muitas mudanças de versões que devem ser levadas em consideração na hora de adotar qualquer biblioteca.

## Visualização dos casos de uso

### [Especificação dos casos de uso](especificacaoCasosDeUso)

![Especificação dos casos de uso](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/diagramaCasoDeUso.svg)

## Qualidade

Na API, os padrões adotados no projeto seguirão convenções do framework NodeJS, que são amplamente utilizados por projetos de diversos tamanhos.

Na interface de usuário, a utilização do React, permitirá que o desenvolvimento seja realizado de forma eficiente e componentizado, com facilidade de integração com outras bibliotecas e serviços.

Os desenvolvedores do projeto também farão uso das folhas de estilo das linguagens de programação adotadas e contarão com ferramentas de análise estática, para assegurar que o desenvolvimento está de acordo com os requisitos de boas práticas de desenvolvimento de software.

