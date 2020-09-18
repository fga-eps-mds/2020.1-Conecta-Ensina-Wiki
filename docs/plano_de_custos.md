---
id: planoDeGerenciamentoDeCustos
title: Plano de gerenciamento de custos
sidebar_label: Plano de gerenciamento de custos
---

## Histórico de Versões

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 15/09/2020 | 0.1 | Criação do documento | João Vitor |
| 16/09/2020 | 0.2 | Criação do controlar custos | João Vitor  e João Pedro Mota |
| 17/09/2020 | 0.3 | Criação do segundo tópico (Estimar custos) | João Vitor e João Pedro Mota |
| 17/09/2020 | 0.4 | Criação da introdução e quarto tópico | João Vitor e João Pedro Mota |


## 1. Introdução 

Este documento tem como objetivo identificar e documentar a forma como será realizada a gerência de custos do projeto. Sendo apresentado o detalhamento do processo de gerenciamento de custos e regras de medição. Portanto, este documento é o responsável por garantir que o projeto seja executado dentro do orçamento planejado.

## 2. Estimar custos

Estimar os custos é o processo de desenvolvimento de uma estimativa dos recursos monetários necessários para executar as atividades do projeto (PMBOK, pág. 200).
Para a execução dessa estimativa em nosso projeto utilizamos o backlog do produto (BP) para a lista de atividades, a técnica de planning poker para estimar a dificuldade de cada tarefa e a média de horas gastas nas primeiras sprints por atividade em relação a sua pontuação (HP) para estimar o total de horas do projeto.
Para a estimativa custo-hora (CH) foi utilizado o valor médio gasto mensalmente pela UsP com estudantes de Engenharia, sendo 2200 reais, divididos pela quantidade de dias úteis por mês (21) e média de 5 horas diárias na universidade. Sendo o CH =  20,95.

**Equação:** `Custo estimado = Total de pontos do projeto x HP x CH`


## 3. Controlar Custos

Controlar os custos é o processo de monitoramento do andamento do projeto para atualização no seu orçamento e gerenciamento das mudanças feitas na linha de base de custos, segundo PMBOK. Utilizaremos para o controle de custos o GVA (Gerenciamento de valor agregado), que é composto por três elementos.

| Sigla | Definição | Descrição |
| :---------: | :-------: | :--------: |
| Sigla | Definição | Descrição |
| :---------: | :-------: | :--------: |
| VP | Valor planejado | É o orçamento autorizado designado para o trabalho a ser executado. Será calculado a partir do custo definido na estimativa acima |  
| VA | Valor agregado | É o orçamento associado ao trabalho autorizado que foi concluído. Será calculado por meio da multiplicação do valor planejado para a atividade pela porcentagem concluída da mesma ao fim do tempo planejado. |
| CR | Custo real | É o quanto foi gasto na execução do trabalho. Será calculado a partir da multiplicação das horas gastas pelos integrantes do projeto pelo preço da hora trabalhada | 

A partir destes três elementos definidos, é possível utilizá-los para calcular os indicadores que auxiliarão na definição da situação do projeto. Realizando assim o cálculo da variação de prazos (VPR), variação de custos (VC), índice de desempenho de prazos (IDP) e do índice de desempenho de custos (IDC).

### 3.1 Variação de prazos

A quantidade de tempo em que o projeto está adiantado ou atrasado em relação à data de entrega planejada em um determinado momento, expressa como a diferença entre o valor agregado e o valor planejado (PMBOK, pág.224).

**Equação:** `VPR = VA - VP`

| Resultado | Interpretação |
| :-------: | :--------: |
| VPR > 0 | Adiantado |
| VP = 0 | No prazo |
| VPR < 0 | Atrasado |

### 3.2 Variação de custos

A quantidade de déficit ou excedente orçamentário em um determinado momento, expressa como a diferença entre o valor agregado e o custo real (PMBOK, pág.224).

**Equação:** `VC = VA - CR`

| Resultado | Interpretação |
| :-------: | :--------: |
| VC > 0 | Custo abaixo do planejado |
| VC = 0 | Custo conforme o planejado |
| VC < 0 | Custo acima do planejado |

### 3.3 Índice de desempenho de prazos

Uma medida de eficiência do cronograma expressa como a relação do valor agregado/valor planejado (PMBOK, pág.224).

**Equação:** `IDP = VA / VP` 

| Resultado | Interpretação |
| :-------: | :--------: |
| IDP > 1 | Adiantado |
| IDP = 1 | No prazo |
| IDP < 1 | Atrasado |

### 3.4 Índice de desempenho de custos

Uma medida de eficiência de custos dos recursos orçados expressa como a relação valor agregado/custo real (PMBOK, pág.224).

**Equação:** `IDC = VA / CR`

| Resultado | Interpretação |
| :-------: | :--------: |
| IDC > 1 | Custo abaixo do planejado |
| IDC = 1 | Custo conforme o planejado |
| IDC < 1 | Custo acima do planejado |

## 4. Análise tempo x Orçamento

Com a aquisição dos índices de **desempenho de custos** e de **desempenho de prazos** é possível fazer a relação deles, viabilizando avaliar o projeto perante estas informações.

| | Atraso no cronograma | Dentro do prazo | Adiantado no Cronograma |
| :-: | :---------: | :-------: | :--------: |
| Abaixo do orçamento |  | | |
| Dentro do orçamento | | | |
| Acima do orçamento | | | |

## 5. Referências

* PMI. Um guia do conhecimento em gerenciamento de Projetos (Guia PMBOK), Project Management Institute, 5ª Edição, Pennsylvania, Estados Unidos da América, 2013.
* [Plano de Gerenciamento de Custos, equipe Aix](https://fga-eps-mds.github.io/2019.1-Aix/gerencia/2019/04/05/plano-de-gerenciamento-de-custos/)
* [Plano de Gerenciamento de Custos, equipe Escola-X](https://github.com/fga-eps-mds/2017.1-Escola-X/wiki/Plano-de-Gerenciamento-de-Custos)
* [Plano de Gerenciamento de Custos, equipe QueroCultura](https://github.com/fga-eps-mds/2017.2-QueroCultura/wiki/Plano-de-Gerenciamento-de-Custos)


