---
id: modelagemDoBancoDeDados
title: Modelagem do banco de dados
sidebar_label: Modelagem do banco de dados
---

## Histórico de versões

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 10/09/2020 | 0.1 | Criação do documento | Júlio Schneider, Edvan Gomes, Igor Veludo |
| 11/09/2020 | 0.2 | Atualização do Banco de Dados | Júlio Schneider, Edvan Gomes, Igor Veludo |
| 01/10/2020 | 0.3 | Criação do modelo conceitual | Paulo Victor |
| 02/10/2020 | 0.4 | Atualização do modelo conceitual | Paulo Victor e João Pedro |
| 06/10/2020 | 0.5 | Atualização do modelo conceitual e adição da imagem | Paulo Victor e João Pedro |
| 07/11/2020 | 0.6 | Atualização dos modelos conceituais | Paulo Victor e João Pedro |
| 10/12/2020 | 0.7 | Modificação do ME-R e DE-R e adição do DLD | João Vitor |

## Introdução

Este artefato possui como finalidade a documentação da modelagem do banco de dados, que consiste na criação do modelo relacional no software brModelo, versão 3.2, do projeto Conecta-Ensina, desenvolvido nas disciplinas de Métodos de Desenvolvimento de Software e Engenharia de Produto de Software no primeiro semestre do ano de 2020, que possui como cliente a empresa Conecta-Ensina, representado na equipe pelas figuras do Fábio e da Carol.

## Modelagem do banco de dados

### Modelo Entidade-Relacionamento (ME-R)

#### Entidades

- USER
  - STUDENT
    - TEACHER
- SUBJECT
- COMPLAIN
- CLASSROOM 
- RATE
- MESSAGE

#### Atributos
- USER (<u>id</u>, first_name, last_name, email, password, cellphone, role)
  - STUDENT (id, cpf, birthdate, institution, grade, cep, number, details, special, description, status)
    - TEACHER (id, photo, video, graduation_area, degree, bank, agency, account)
- SUBJECT (<u>id</u>, photo, video, graduation_area, degree, bank, agency, account)
- COMPLAIN (<u>id</u>, details, reported_by, accused)
- CLASSROOM (<u>id</u>, grade, dtclass, cep, number, details, status, timer, subject, teacher)
- RATE (<u>id</u>, comments, rate, rate_creator, class_id, teacher, student)
- MESSAGE (<u>id</u>, text, classroom_id, student_id, teacher_id, create_by)


#### Relacionamentos
- USER **– remove –** COMPLAIN<br>
O USER que for administrador remover várias COMPLAIN, e uma COMPLAIN só pode ser removida por um USER que for administrador.<br>
Cardinalidade 1:n<br>
- STUDENT **– makes –** COMPLAIN<br>
Um STUDENT pode fazer várias COMPLAIN, mas uma COMPLAIN só pode ser feita por um STUDENT.<br>
Cardinalidade 1:n<br>
- STUDENT **– requests –** CLASSROOM<br>
Um STUDENT pode solicitar várias CLASSROOM e uma CLASSROOM só pode ser requisitado por um STUDENT.<br>
Cardinalidade 1:n<br>
- TEACHER **– confirms –** CLASSROOM<br>
Um TEACHER confirma várias CLASSROOM e uma CLASSROOM é confirmado por um TEACHER. <br>
Cardinalidade 1:n<br>
- TEACHER **– teaches –** STUDENT<br>
Um TEACHER ensina vários STUDENT e um STUDENT pode ter aula com vários TEACHER.<br>
Cardinalidade n:m<br>
- TEACHER **– teaches –** SUBJECT<br>
Um TEACHER pode lecionar diversas SUBJECT e uma SUBJECT pode ser lecionado por diversos TEACHER.<br>
Cardinalidade n:m<br>
- SUBJECT **– belongs –** CLASSROOM<br>
Um SUBJECT pode pertencer a várias CLASSROOM, mas uma CLASSROOM só tem a uma SUBJECT.<br>
Cardinalidade 1:n<br>
- CLASSROOM **– has –** MESSAGE<br>
Uma CLASSROOM tem diversas MESSAGE, mas uma MESSAGE pertence a uma CLASSROOM.<br>
Cardinalidade 1:n<br>
- CLASSROOM **– generates –** RATE<br>
Uma CLASSROOM gera algumas RATE e uma RATE só é gerada após a finalização de uma CLASSROOM.<br>
Cardinalidade 1:n<br>
- USER **– evaluates –** TEACHER<br>
O USER que for administrador avalia o cadastro de vários TEACHER e um TEACHER só tem o cadastro avaliado pelo USER que for administrador.<br>
Cardinalidade 1:n

### Diagrama Entidade-Relacionamento (DE-R)

![Modelagem do Banco de Dados v0.5](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/database/modelagem_banco_de_dados_v05.png)

[Para ver versões antigas, clique aqui](https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/tree/master/website/static/img/database)

### Diagrama Lógico de Dados (DLD)

![Modelagem do Banco de Dados DLD](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/database/modelagem_banco_de_dados_dld.png)