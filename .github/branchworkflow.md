# Política de Branch

Para garantir um fluxo de trabalho contínuo e de forma padronizada possibilitando o rastreamento das funcionalidades desenvolvidas e facilitando a implementação de _pipelines_ de integração(CI) e entrega(CD) contínua, será utilizada a estratégia de Git Flow.

Os conceitos chave para implementação da estratégia de Git Flow:

- master: contém o nosso código de produção, todo o código que estamos desenvolvendo, em algum momento será “juntado” com essa branch
- develop: contém o código do nosso próximo deploy, isso significa que conforme as features vão sendo finalizadas elas vão sendo juntadas nessa branch para posteriormente passarem por mais uma etapa antes de ser juntada com a master
- feature/\*: são branches para o desenvolvimento de uma funcionalidade específica, por convenção elas tem o nome iniciado por feature/, por exemplo: feature/cadastro-usuarios. - - Importante ressaltar que essas branches são criadas sempre à partir da branch develop
- hotfix/\*: são branches responsáveis pela realização de alguma correção crítica encontrada em produção e por isso são criadas à partir da master. Importante ressaltar que essa branch deve ser juntada tanto com a master quanto com a develop
- release/\*: tem uma confiança maior que a branch develop e que se encontra em nível de preparação para ser juntada com a master e com a develop (caso alguma coisa tenha sido modificada na branch em questão)

Exemplo do fluxo de branches:

![](https://i.imgur.com/NRbk35f.png)

# Nomenclatura

Toda branch criada deve estar relacionada a uma funcionalidade ou correção, logo necessariamente deverá estar atrelada a uma Issue. O nome da branch deve ser em INGLÊS e deve seguir o padrão:

- doc/IssueID-descrição-curta: para documentações

- feature/IssueID-descrição-curta: para funcionalidades.

- hotfix/IssueID-descrição-curta: para correções;

# Referências

- A successful Git branching model. Vincent Driessen. Disponível em: <https://nvie.com/posts/a-successful-git-branching-model/>. Acessado em: 05 de outrubro 2020.

- FeatureBranch. Martin Fowler. Disponível em: <httgitps://martinfowler.com/bliki/FeatureBranch.html>. Acessado em: 05 de outubro 2020.

- Git Feature Branch Workflow. Atlassian. Disponível em: <https://br.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow>. Acessado em: 28 de agosto de 2019.
