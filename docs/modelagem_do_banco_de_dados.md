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

## Introdução

Este artefato possui como finalidade a documentação da modelagem do banco de dados, que consiste na criação do modelo relacional no software brModelo, versão 3.2, do projeto Conecta-Ensina, desenvolvido nas disciplinas de Métodos de Desenvolvimento de Software e Engenharia de Produto de Software no primeiro semestre do ano de 2020, que possui como cliente a empresa Conecta-Ensina, representado na equipe pelas figuras do Fábio e da Carol.

## Modelagem do banco de dados

### Modelo Entidade-Relacionamento (MER)

#### Entidades

- USER (<u>ID</u>, firstName, lastName, email, password, cellphone, role)
- STUDENT (<u>*idUser*</u>, birthDate, cpfParent, address(CEP, street, number, complement), institution, serie)
- SUBJECT (<u>ID</u>, graduation, name)
- TEACHER (<u>*idUser*</u>, cpf, address(CEP, street, number, complement), photo, description, video, institution, graduation, graduationArea, degree, *subject []*, bank, agency, account, status)
- CLASS (<u>ID</u>, *teacher*, *student*, serie, *subject*, dtClass, duration, address(CEP, street, number), status, timer)
- RATING_TEACHER (<u>*class*</u>, stars, rating)
- RATING_STUDENT (<u>*class*</u>, rating)
- REPORT (<u>ID</u>, *teacher*, report)
- FAQ (<u>ID</u>, question, answer)

#### Cardinalidades

- USER é pode ser um STUDENT, STUDENT é um USER.<br>
USER 0:1 STUDENT

- USER é pode ser um TEACHER, TEACHER é um USER.<br>
USER 0:1 TEACHER

- TEACHER pode dar várias SUBJECTS, SUBJECT pode ser dada por vários TEACHERS.<br>
TEACHER N:N SUBJECT

- TEACHER pode dar várias CLASSES, CLASS é dada por um TEACHER.<br>
TEACHER 1:N CLASS

- TEACHER pode ter vários REPORTS, REPORT pertence a um TEACHER.<br>
TEACHER 1:N REPORT

- STUDENT pode receber várias CLASSES, CLASS é dada a um STUDENT.<br>
STUDENT 1:N CLASS

- STUDENT pode fazer vários REPORTS, REPORTé feito por um STUDENT.<br>
STUDENT 1:N REPORT

- CLASS é de uma SUBJECT, SUBJECT pode ter várias CLASSES.<br>
CLASS N:1 SUBJECT

- CLASS pode ter um RATINGTEACHER, RATINGTEACHER é a uma CLASS.<br>
CLASS 0:1 RATINGTEACHER

- CLASS pode ter um RATINGSTUDENT, RATINGSTUDENT é a uma CLASS.<br>
CLASS 0:1 RATINGSTUDENT

### Diagrama Entidade-Relacionamento (DER)

![Modelagem do Banco de Dados v0.3](https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/master/website/static/img/database/modelagem_banco_de_dados_v03.png)

[Para ver versões antigas, clique aqui](https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Wiki/tree/master/website/static/img/database)