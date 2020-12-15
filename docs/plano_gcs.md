---
id: planoGcs
title: Plano de Gestão e Configuração de Software
sidebar_label: Plano de GCS
---

| Data | Versão | Descrição | Autor(es) |
|:--:|:--:|:--:|:--:|
| 14/12/2020 | 0.1 | Criação do Documento | Igor Veludo |

## 1. Introdução

<p align = "justify">Este documento tem como finalidade orientar a todos que buscam contribuir com o repositório, apresentando padrões, políticas, ferramentas, instruindo sobre o ambiente de desenvolvimento e qualquer atividade de configuração necessária.</p>

## 2. Políticas

### 2.1 Política de Commits

### _Commits_ atômicos

Sempre divida seu trabalho em _commits_ pequenos e significativos de forma que cada _commit_ implemente somente uma funcionalidade.

Adota-se para este projeto padrões para o comentário e execução dos commits. O idioma padrão para efetuar commits para os repositórios desta organização é o **inglês**. As mensagens devem ser suscintas e expressarem de forma clara e objetiva a ação do commit.

### Regra 50/72

As mensagens devem ser escritas em 50 caracteres, caso seja necessário escrever uma mensagem maior, escreva um resumo em 50 caracteres, adicione um linha em branco, e descreva melhor o _commit_ em quantas linhas desejar, porém todas as linhas devem ter no máximo 72 caracteres. Caso não consiga descrever o seu _commit_ com essa regra, o seu commit provavelmente não é atômico.

## Commit

A anatomia do commit deve seguir o seguinte padrão:

**Formato**:

```
assunto

<corpo>
```

### Assunto

- Máximo de 50 caracteres
- Tipo de escopo devem estar em letras minúsculas

Exemplo:

`Add Sprint document`

### 2.2 Política de Branches

Para garantir um fluxo de trabalho contínuo e de forma padronizada possibilitando o rastreamento das funcionalidades desenvolvidas e facilitando a implementação de _pipelines_ de integração(CI) e entrega(CD) contínua, será utilizada a estratégia de Git Flow.

Os conceitos chave para implementação da estratégia de Git Flow:

- master: contém o nosso código de produção, todo o código que estamos desenvolvendo, em algum momento será “juntado” com essa branch
- develop: contém o código do nosso próximo deploy, isso significa que conforme as features vão sendo finalizadas elas vão sendo juntadas nessa branch para posteriormente passarem por mais uma etapa antes de ser juntada com a master
- feature: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. - - Importante ressaltar que essas branches são criadas sempre à partir da branch develop
- hotfix: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop
- doc: São branches responsáveis pela criação de documentação e/ou revisão de documentação já existente.
- automation: são branches responsáveis pela integração de alguma ferramenta auxiliar ao projeto

Exemplo do fluxo de branches:
![gitflow](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/gitflow.png)

# Nomenclatura

Toda branch criada deve estar relacionada a uma funcionalidade ou correção, logo necessariamente deverá estar atrelada a uma Issue. O nome da branch deve ser em INGLÊS e deve seguir o padrão:

- feature/IssueID-USX#nome-da-issue: para Historias de Usuário;

- feature/IssueID-descrição-curta: para funcionalidades que não são Historias de Usuário.

- hotfix/IssueID-descrição-curta: para correções;

- doc/IssueID-descrição-curta: para documentações;

- automation/IssueID-descrição-curta: para implementação de ferramentas;

## 3. Uso de Issues


As <i>issues</i> serão criadas com o objetivo de mapear e descrever todo o trabalho a ser desenvolvido durante o projeto, possibilitando controle e transparência do que está sendo feito. Com isso, conseguiremos manter o rastro de tudo que foi planejado e efetuado.</p>

As issues vão conter identificadores e <i>labels</i>, para que se possa indicar sua natureza. Um template de issue pode ser encotrada [aqui](https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/blob/master/.github/ISSUE_TEMPLATE/general-issue-template.md).

## 4. Ferramentas

As ferramentas abaixo citadas, são a junção de todas as ferrramentas utilizadas no projeto.

| Ferramenta | Descrição |
|:----:|:---------:|
| Git | Ferramenta de versionamento |
| GitHub | Ferramenta de hospedagem de repositórios e controle de versão|
| ZenHub | Ferramenta de gerenciamento de equipe |
| React JS | Framework para a criação do Web App |
| Node | Tecnologia para criação de API's |
| Docker | Ferramenta de virtualização e configuração de ambiente por meio de containers|
| Docker Compose | Ferramenta de gerenciamento de containers Docker |
| Travis CI | Ferramenta de integração contínua|
| Digital Ocean | Ferramenta para o deploy - BackEnd|
| GitHub Actions | Ferramenta para o deploy - FrontEnd|
| CodeCov | Ferramenta de análise de cobertura de testes |
| SonarCloud | Ferramenta de análise de métricas de projeto |
| VS Code | Ferramenta de construção e edição de código fonte |

## 5. Referências

> PMI. *Um guia do conhecimento em gerenciamento de projetos.* Guia PMBOK® 5a. ed. - EUA: Project Management Institute, 2013

> Semantic Versioning 2.0.0 . Semantic Versioning Specification (SemVer). Disponível em <[http://semver.org/](http://semver.org/)>