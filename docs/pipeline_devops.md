---
id: devops
title: Pipeline Devops
sidebar_label: Pipeline Devops
---

## Introdução 
Este documento tem como objetivo resumir as etapas de DevOps utilizdas no projeto, desde a ferramenta de versionamento até a o deploy contínuo.

## Etapas

### Build
#### Controle de Versão
Para o controle de versão do código é utilizado o Gitub e é onde define-se o conteudo utilizado nos ambientes de Homologação e Produção.

### Docker
Docker é uma ferramenta que permite empacotar (container) a aplicação em de forma padronizada, para assim funcionar em qualquer lugar. Um Container é a forma de empacotar sua aplicação e suas dependências (bibliotecas) de forma padronizada. 

#### Qualidade de Código
A qualidade e saúde do código é analisada através da ferramenta SonarCloud, que analisa aspectos como complexidade, tamanho de métodos, trechos duplicados e "mau cheiro" (code smells) no código.

### Continuos Integration
#### Build e Testes
A ferramenta utilizada para a execução dessa etapa é o Travis CI. Nessa parte o código é testado e construído para integrar as alterações realizadas pela equipe. 
##### BackEnd
Após o build uma imagem Docker é enviada para o Docker Hub. Depois, é aberto um PR para a branch pertinente de acordo com o ambiente (Homologação ou Produção) em que pretende-se fazer o deploy e, logo após. é feito a analise manual do PR.

##### FrontEnd
Travis presente em todas as branchs, exceto a branch master. Quando um commit é enviado ao GitHub, o Travis faz a build do projeto se todos os testes estiverem passando.

### Deploy

#### GitHub Actions (Front-end)
Quando há PR para a master, o GitHub Actions entra em ação em vez do Travis, gerando a APK da aplicação na região de release do próprio Github. Um link com a URL da APK é mandada para Slack do time 3 (Conecta Ensina), toda vez em que a branch master é atualizada.

#### Digital Ocean + Rancher (API)
Após construida a imagem da API essa ser enviada para o Docker Hub, alguns comandos de upgrade de serviço do Rancher são executados no Travis CI e a imagem docker, já dísponivel no Docker Hub,
é atualizada nos hosts da Digital Ocean.

### Pipilene de Devops FrontEnd

![mobile](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/deploy_mobile.png)

### Pipilene de Devops BackEnd

![backEnd](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/deploy_backend.png)
