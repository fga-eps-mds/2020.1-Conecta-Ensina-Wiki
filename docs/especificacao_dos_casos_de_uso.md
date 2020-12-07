---
id: especificacaoCasosDeUso
title: Especificação dos casos de uso
sidebar_label: Especificação dos casos de uso
---

## Histórico de versões

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 03/09/2020 | 0.1 | Criação do documento | Paulo Victor e João Vitor |
| 04/09/2020 | 0.2 | Preenchimento do documento | Paulo Victor e João Vitor |
| 05/09/2020 | 0.3 | Correção de links | Paulo Victor |
| 06/09/2020 | 0.4 | Teste e adaptação com docossauros | Paulo Victor |
| 06/09/2020 | 0.5 | Inclusão do diagrama de casos de uso | Paulo Victor e João Vitor |
| 05/12/2020 | 0.6 | Adição de novos casos de uso | João Vitor |

## Introdução

Este artefato possui como finalidade a documentação das especificações de caso de uso - use cases - relacionados ao projeto Conecta-Ensina, desenvolvido nas disciplinas de Métodos de Desenvolvimento de Software e Engenharia de Produto de Software no primeiro semestre do ano de 2020, que possui como cliente a empresa Conecta-Ensina, representado na equipe pela figura do Fábio e da Carol.


## Diagrama de casos de uso

![Diagrama de Casos de Uso](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/diagramaCasoDeUso.svg)


### UC01 Manter aluno

**Ator:** Aluno

**Descrição:** Permite que o aluno faça cadastro, visualize, edite e delete seu perfil de aluno no sistema.

**Pré-condições:** Usuário ter o aplicativo instalado em seu dispositivo.

**Pós-condições:** Qualquer alteração feita deve ser salva no sistema.

**Fluxo normal:**
1. Aluno entra no aplicativo e realiza login.
2. Aluno entra na aba do perfil e edita as informações.
3. Salva o perfil e volta a página inicial.

**Extensões:**<br>
1a. Será necessário cadastrar o aluno que não possui acesso.<br>
1b. Caso tenha esquecido a senha, ele pode solicitar uma nova.<br>


### UC02 Manter professor

**Ator:** Professor

**Descrição:** Permite que o professor faça cadastro, visualize, edite e delete seu perfil de aluno no sistema.

**Pré-condições:** Usuário ter o aplicativo instalado em seu dispositivo.

**Pós-condições:** Qualquer alteração feita deve ser salva no sistema.

**Fluxo normal:**
1. Professor entra no aplicativo e realiza login.
2. Entra na aba do perfil e edita as informações.
3. Salva o perfil e volta a página inicial.

**Extensões:**<br>
1a. Será necessário cadastrar o professor que não possui acesso, assim como ter esse cadastro validado pelo administrador.<br>
1b. Caso tenha esquecido a senha, ele pode solicitar uma nova.<br>


### UC03 Solicitar aula

**Ator:** Aluno

**Descrição:** Permite que um aluno busque por aula de acordo com a área de conhecimento e realize o pré-agendamento.

**Pré-condição:** O aluno precisa estar logado no sistema com o perfil “Aluno”.

**Pós-condição:** Um pedido de aula será encaminhado ao professor.

**Fluxo normal:**
1. Entra na aba de “Marcar aula”.
2. Aluno seleciona os filtros desejados.
3. O sistema apresenta os professores de acordo com a classificação.
4. Aluno seleciona o professor.
5. Aluno solicita o pré-agendamento.

**Fluxo alternativo:**
1. Aluno entra na aba de “Aula urgente”.
2. Aluno seleciona a matéria.
3. Aluno solicita o pré-agendamento.

**Extensões:**<br>
2a. O aluno pode aplicar filtro de matéria, data, duração da aula e modalidade da aula.<br>


### UC04 Aceitar aula

**Ator:** Professor

**Descrição:** Permite que o professor aceite a aula solicitada pelo aluno.

**Pré-condição:**  A aula ter sido solicitada.

**Pós-condições:** O pré-agendamento será respondido pelo professor.

**Fluxo normal:**
1. O professor visualiza as informações da aula.
2. O professor aceita a aula.

**Extensões:**<br>
2a. O professor pode recusar a aula.<br>


### UC05 Consultar aula agendada

**Ator(es):** Aluno e professor.

**Descrição:** Permite que um aluno ou um professor verifique a aula agendada. 

**Pré-condição:** Aula precisa ter sido agendada.

**Pós-condição:** Identificar o horário da aula agendada.

**Fluxo normal:**
1. Entra na aba de “Aulas Agendadas”.
2. O sistema apresenta ao ator todas as aulas agendadas. 

**Extensões:**<br>
2a. O ator não poderá alterar os horários agendados. <br>


### UC06 Monitorar aula

**Ator(es):** Aluno e professor

**Descrição:** Atores poderão monitorar o andamento da aula.

**Pré-condições:** Atores estarem com a aula aberta.

**Pós condições:** A aula foi finalizada.

**Fluxo normal:** 
1. Atores iniciam o cronômetro da aula.
2. Atores finalizam a aula.

**Fluxo alternativo:**
1. Atores clica em cancelar aula
2. Atores inserem justificativa.

**Extensões:**<br>
1a. Após iniciar o cronômetro, aparece a opção de finalizar aula.<br>


### UC07 Avaliar aula

**Ator(es):** Aluno e professor

**Descrição:** Permite ao ator avaliar a aula.

**Pré-condição:** Aula ter sido dada.

**Pós-condição:** A avaliação é publicada de forma anônima.

**Fluxo normal:**
1. Ator seleciona a aba de “Aulas Realizadas”.
2. Seleciona a opção de avaliação.
3. Ator preenche os campos de avaliação.
4. Conclui avaliação.

**Extensões:**<br>
4a. Ator pode cancelar a avaliação.<br>


### UC08 Consultar avaliação

**Ator(es):** Aluno e professor.

**Descrição:** Permite aos atores consultar as avaliações sobre as aulas referente a eles de forma anônima.

**Pré-condição:** Ter participado de alguma aula avaliada.

**Pós-condição:** Ator visualiza as avaliações acumuladas.

**Fluxo normal:**
1. Ator seleciona a opção “Minhas avaliações”
2. Ator visualiza a média de estrelas e comentários mais colocados


### UC09 Denunciar perfil
 
**Ator:** Aluno.
 
**Descrição:** Permite ao aluno realizar a denúncia do perfil de um professor.
 
**Pré-condição:**  Acessar a conta com perfil de aluno.
 
**Pós-condição:** Aluno envia denúncia para o administrador avaliar.
 
**Fluxo normal:**
1. Aluno localiza perfil do professor.
2. Realiza denúncia.
 
**Extensões:**<br>
1a. Aluno pode não encontrar perfil do professor.<br>
2a. Aluno pode cancelar a denúncia antes do envio.<br>
 
 
### UC10 Aprovar professor
 
**Ator:** Administrador.
 
**Descrição:** Permite o administrador avaliar as solicitações de cadastro de professores.
 
**Pré-condição:** Algum professor tenha realizado o cadastro.
 
**Pós-condição:** O acesso à conta de professor é liberado ou não.
 
**Fluxo normal:**
1. Administrador seleciona a aba “Professores Pendentes”.
2. Seleciona o perfil de algum professor.
3. Avalia os dados fornecidos.
4. Aprova ou recusa a solicitação de cadastro.
 
**Extensões:**<br>
2a. Pode não haver cadastros pendentes.<br>
 
### UC11 Retirar denúncia
 
**Ator:** Administrador.
 
**Descrição:** Permite ao administrador avaliar as denúncias. 
 
**Pré-condição:** Ter denúncias realizadas .
 
**Pós-condição:** O acesso à conta do professor denunciado pode ser bloqueado.
 
**Fluxo normal:**
1. O administrador seleciona a aba “Denúncias”.
2. Seleciona a denúncia.
3. Avalia a descrição informada.
4. Ratifica ou retira a denúncia.
 
**Extensões:**<br>
2a. Pode não haver denúncias realizadas.<br>
