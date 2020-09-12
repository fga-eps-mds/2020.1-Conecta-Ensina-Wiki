---
id: planoDeGerenciamentoDeRiscos
title: Plano de gerenciamento de riscos
sidebar_label: Plano de gerenciamento de riscos
---

## Histórico de Versões

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 08/09/2020 | 0.1 | Criação do documento | João Vitor e Mateus |
| 09/09/2020 | 0.2 | Criação da introdução | João Vitor e Mateus |
| 09/09/2020 | 0.3 | Criação do tópico papéis e responsabilidade | João Vitor e Mateus |
| 10/09/2020 | 0.4 | Criação dos tópicos metodologia e análise quantitativa | João Vitor e Mateus |
| 10/09/2020 | 0.5 | Criação do tópico categoria dos riscos | João Vitor e Mateus |
| 11/09/2020 | 0.6 | Criação do tópico documentação dos riscos | João Vitor e Mateus |
| 11/09/2020 | 0.7 | Criação da tabela de nível de prioridade | João Vitor e Mateus |
| 12/09/2020 | 0.8 | Criação da tabela de respostas aos riscos | João Vitor e Mateus |
| 12/09/2020 | 0.9 | Revisão | João Vitor e Mateus |

## 1. Introdução

Este documento tem como objetivo identificar e categorizar possíveis riscos ao projeto e suas respectivas gravidades. Também é função deste documento fornecer medidas de controle e monitoramento, assim como os responsáveis pelo seu gerenciamento.

## 2. Processo de gerenciamento dos riscos

### 2.1 Metodologia

No projeto será realizada uma análise quantitativa, que tem por objetivo a priorização e categorizados riscos de acordo com a probabilidade (chances de ocorrência de um risco) e o impacto (o quanto o risco interfere no desenvolvimento do projeto).

### 2.2 Papéis e responsabilidade

Os integrantes da equipe de gerência (EPS) estão responsáveis pelo controle e monitoramento dos riscos que estão presentes em ciclo de vida do desenvolvimento do projeto. Os membros e os riscos por quais ficaram responsáveis serão definidos em reunião virtual, com base no perfil de cada membro da gerência.

## 3. Categoria dos riscos

Neste projeto, os riscos serão categorizados em **técnico**, **externo**, **organizacional** ou **gerenciamento de projetos**.

### 3.1 Técnico

Os riscos técnicos abordam os requisitos, tecnologia, complexidade, confiabilidade e qualidade.

### 3.2 Externo

Os riscos externos são relativos ao cliente, mercado ou ambiente.

### 3.3 Organizacional

Os riscos organizacionais abordam as dependências do projeto, recursos e priorização.

### 3.4 Gerenciamento de projetos

Os riscos de gerenciamento do projeto abordam a estimativa, planejamento, controle e a comunicação.

## 4. Documentação dos riscos

Para a documentação dos riscos, foi utilizada uma tabela, sendo composta pela descrição dos riscos, categoria, causas e consequências. Os riscos são indexados com um ID para a identificação.

| ID | Risco | Categoria | Causa | Consequência |
| :-: | :---: | :-------: | :---: | :-----: |
| R01 | Gastar a maior parte do tempo capacitando a equipe em novas tecnologias | Técnico | Falta de familiaridade com as tecnologias do projeto | Atraso no cronograma e entrega não satisfatória |
| R02 | Arquitetura do software mal desenvolvida | Técnico | Falta de conhecimento da equipe sobre o assunto | Baixo desempenho do software |
| R03 | Dificuldade no desenvolvimento do software | Técnico | Tema complexo ou falta de experiência dos membros da equipe | Atraso no cronograma |
| R04 | O software não funciona corretamente | Técnico | Presença de falhas no sistema | Insatisfação do cliente com o produto |
| R05 | Projeto não atende a expectativa do cliente | Técnico | Falta de comunicação com o cliente | Software entregue não atende os requisitos do cliente |
| R06 | Mudança de escopo | Externo | Nova demanda do cliente ou definição da disciplina | Replanejamento do projeto |
| R07 | Falta de cliente real | Externo | Cliente desiste de prosseguir com o projeto | Projeto encerrado |
| R08 | Baixa produtividade da equipe | Organizacional | Desmotivação dos membros da equipe | Atraso no cronograma |
| R09 | Ambiente e recursos de trabalho inadequados | Organizacional | Ambiente de trabalho barulhento e/ou desconfortável, conexão de internet instável ou ferramenta de desenvolvimento inadequada | Dificuldade na comunicação, desmotivação dos membros, baixa produtividade e atraso no desenvolvimento do projeto |
| R10 | Membro ocioso | Gerenciamento | Mal gerenciamento de recursos humanos | Sobrecarga de tarefas para alguns membros |
| R11 | Um ou mais integrantes sairem ou ficarem ausentes | Gerenciamento | Problemas pessoais ou desistência da matéria | Entrega do produto não terá uma qualidade esperada e sobrecarga de trabalho para o restante de membros da equipe |
| R12 | Problema de comunicação na equipe | Gerenciamento | Falta de afinidade entre os membros ou sentimento de não pertencente ao grupo | Baixa integração e alinhamento da equipe |

## 5. Análise quantitativa

### 5.1 Probabilidade

| Probabilidade | Intervalo | Peso |
| :-----------: | :-------: | :--: |
| Muito baixa | 0 a 15 | 1 |
| Baixa | 16 a 35 | 2 |
| Média | 36 a 50 | 3 |
| Alta | 51 a 65 | 4 |
| Muito alta | 66 a 100 | 5 |

### 5.2 Impacto

| Impacto | Descrição | Peso |
| :-----: | :-------: | :--: |
| Muito baixa | Pouco Expressivo | 1 |
| Baixo | Pouco impacto | 2 |
| Médio | Impacto Médio | 3 |
| Alto | Grande impacto | 4 |
| Muito alto | Impacto impede o desenvolvimento do projeto  | 5 |

### 5.3 Prioridade 

A prioridade é o que determina a urgência que medidas devem ser tomadas para resolver o risco, e é calculada com base no **impacto** e na **probabilidade**.

| I/P | Muito baixa | Baixa | Média | Alta | Muito alta |
| :-: | :---------: | :---: | :---: | :--: | :--------: |
| **Muito baixo** | 1 | 2 | 3 | 4 | 5 |
| **Baixo** | 2 | 4 | 6 | 8 | 10 |
| **Médio** | 3 | 6 | 9 | 12 | 15 |
| **Alto** | 4 | 8 | 12 | 16 | 20 |
| **Muito alto** | 5 | 10 | 15 | 20 | 25 |

#### 5.3.1 Nível de Prioridade

| Prioridade | Intervalo |
| :--------: | :-------: |
| Muito baixo | 1 a 5 |
| Baixo | 6 a 10 |
| Médio | 11 a 15 |
| Alto | 16 a 20 |
| Muito alto | 21 a 25 |

## 6. Planejamento de resposta dos riscos

A resposta aos riscos consiste em aumentar as oportunidades e reduzir as ameaças aos objetivos do projeto, permitindo assim a abordagem dos riscos por prioridades. Os tipos de abordagem que devem ser aplicadas a cada risco são **prevenir**, **transferir**, **mitigar** ou **aceitar**.

### 6.1 Prevenir

Na estratégia de prevenir o risco, a equipe deve agir para eliminar a ameaça ou proteger o projeto contra o impacto deste risco. Extensão do cronograma, alteração da estratégia ou redução do escopo são exemplos de ações com o objetivo de prevenir.

### 6.2 Transferir

A estratégia de transferência de riscos consiste em realocar o impacto e responsabilidade da ameaça para terceiros, transferindo o esforço gerencial para outra área, equipe ou software.

### 6.3 Mitigar

Na estratégia de mitigar o risco, a equipe age para reduzir a probabilidade ou impacto do risco. Diminuir a possibilidade da ocorrência do risco é melhor do que reparar o impacto produzido pelo mesmo. Quando reduzir a probabilidade do risco não é possível, deve-se abordar fatores determinantes para a gravidade do impacto.

### 6.4 Aceitar 

A aceitação é a resposta ao risco que a equipe do projeto estabelece não agir para diminuir a ocorrência. Essa postura referente a um risco é aplicada quando é inviável evitar, diminuir ou transferir o risco.

### 6.5 Respostas aos riscos

As respostas aos riscos são apresentadas em tabela, integrando a análise quantitativa e a ação tomada pela equipe para lidar com os riscos.

| ID | Probabilidade | Impacto | Prioridade | Resposta |
| :-: | :---: | :---: | :---: | :-----: |
| R01 | 30 | 5 | 10 | Mitigar |
| R02 | 20 | 4 | 8 | Mitigar |
| R03 | 15 | 5 | 5 | Prevenir |
| R04 | 15 | 4 | 4 | Mitigar |
| R05 | 10 | 5 | 5 | Prevenir |
| R06 | 80 | 5 | 25 | Transferir |
| R07 | 10 | 5 | 5 | Aceitar |
| R08 | 40 | 4 | 12 | Prevenir |
| R09 | 40 | 5 | 15 | Aceitar |
| R10 | 20 | 3 | 6 | Mitigar |
| R11 | 20 | 4 | 10 | Transferir |
| R12 | 20 | 3 | 6 | Prevenir |

## 7. Bibliografia
[Plano de gerenciamento de riscos da equipe Aix](https://fga-eps-mds.github.io/2019.1-Aix/gerencia/2019/04/06/plano-de-gerenciamento-de-riscos/)
[Plano de gerenciamento de riscos da equipe Escola X](https://github.com/fga-eps-mds/2017.1-Escola-X/wiki/Plano-de-Gerenciamento-de-Riscos)
[Plano de gerenciamento de riscos da equipe Quero Cultura](https://github.com/fga-eps-mds/2017.2-QueroCultura/wiki/Plano-de-Gerenciamento-de-Riscos)
