---
id: documentoDeVisao
title: Documento de visão
sidebar_label: Documento de visão
---

## Histórico de Versão

| Data | Versão | Descrição | Autor |
|--------|-----------|---------------|---------|
| 17/03/2020 | 0.1 | Criação do documento | Paulo Lopes |
| 17/03/2020 | 0.2 | Introdução e Posicionando  | Denniel William |
| 19/03/2020 | 0.4 | Descrição dos Envolvidos e do Usuário | Denniel William |
| 19/03/2020 | 0.5 | Visão Geral do Produto e ajuste de tópicos | Denniel William |  
| 20/03/2020 | 0.7 | Faixas de Qualidade | Denniel William |   
| 21/03/2020 | 0.8 | Restrições | Rhuan Marques |    
| 21/03/2020 | 0.9 | Recursos do Produto | Edvan Gomes |	
| 02/10/2020 | 0.10 | Ajuste Introdução e Posicionando | Denniel William | 
| 02/10/2020 | 0.11 | Ajuste Resumo dos Envolvidos e dos Usuários | Denniel William | 
| 03/10/2020 | 0.12 | Ajuste Perfis dos Envolvidos | Denniel William |  
| 03/10/2020 | 0.13 | Revisão do Documento | Denniel William, Edvan Gomes,  Rhuan Marques |

## Sumário

## 1. Introdução

### 1.1 Propósito

O propósito deste documento é expor as necessidades e funcionalidades do aplicativo Conecta Ensina onde o sistema será responsável pelo gerenciamento de aulas particulares, definindo os requisitos em termos das necessidades dos usuários finais.

### 1.2 Escopo

O _software_ permite a interação de dois tipos de usuário, sendo divididos em professores cadastrados e alunos para contratar os professores. Os alunos irão procurar aula e escolherão entre as disciplinas ofertadas no aplicativo e irão agendar um horário com um professor cadastrado, escolhendo entre aula online ou presencial.
Os professores terá acesso a aulas: pendentes em que aceita pedidos de aula de alunos; marcadas, mostrando a data de cada aula e realizadas. Tendo também a funcionalidade para avaliação para as aulas e de alunos e professores


### 1.3 Visão geral

Este documento contém as características do _software_ a ser construído, sendo mostrado os problemas e mercado que levaram a sua criação e em como o aplicativo apresenta uma resolução. Sendo assim este documento irá abordar, respectivamente: as razões que influenciaram o desenvolvimento da aplicação, descrição dos envolvidos, sendo tratado no fim, os recursos do produto, suas funcionalidades os requisitos utilizados para garantir sua qualidade.

## 2. Posicionando

### 2.1 Oportunidade de negócios 

O _software_ fornece praticidade e facilidade na contratação de aulas particulares podendo fazer isso de qualquer dispositivo Android e navegador Web, tornando, também, mais fácil o gerenciamento de aulas para os usuários e mais seguro pela sistema de avaliações em que proveem um _feedback_ das aulas particulares e dos usuários, sendo professores e alunos avaliados.

### 2.2 Descrição do problema
|  |  | 
|---------------------|----------------------|
| **O problema seria** | dificuldade de gerenciamento de aulas particulares |
| **que afeta** | alunos e professores particulares |
| **cujo impacto é** | a dificuldade de acesso e de suporte ao conhecimento |
| **e uma boa solução seria** | uma aplicação em que estudantes poderiam ter melhor acessibilidade e gestão para contratação de serviços de aulas particulares |

### 2.3 Sentença de posição do produto

Para o cliente que precisa de um _software_ de gerenciamento de aulas particulares, o Conecta Ensina é um aplicativo _mobile_ que traz o aprendizado de forma acessível e melhor gestão de aulas particulares. Diferente de meios de comunicação não desenvolvidos para esse objetivo de comunicação e gestão autônoma dos usuários nosso produto oferece uma forma interativa de contratação de aulas particulares.


## 3. Descrição dos envolvidos e do usuário

### 3.1 Resumo dos envolvidos

  
| Nome | Descrição | Responsabilidade |
|------|-----------|------------------|
| Equipe de Desenvolvimento | Estudantes da Universidade de Brasília da disciplina "Métodos de Desenvolvimento de _Software_" e "Engenharia de Produção de _Software_. | Desenvolver e Implementar o _software_ descrito no documento |
| Equipe de Gestão de Projeto| Estudantes da Universidade de Brasília da disciplina "Engenharia de Produto de _Software_" | Desenvolvimento da aplicação, planejamento das etapas do projeto, verificação dos resultados e identificação de possíveis riscos. |
| Cliente | Conecta Ensina | Contato com o Product Owner para disponibilização de informações para os desenvolvedores do _software_ |

  

### 3.2 Resumo dos usuários

 

| Nome | Descrição |
|------|-----------|
| Professores | Pessoa que irá se cadastrar no aplicativo e de quem será contratado para as aulas |
| Alunos | Pessoa em que irá procurar  e contratar as aulas com base na disciplina |
| Administrador |  |

  
  

### 3.3 Ambiente do usuário

  
O _software_ será utilizado de dispositivos móveis que possuam o sistema operacional _Android. O aparelho deverá ter a versão do _Android_ igual ou superior a < versão > .

  

### 3.4 Perfis dos envolvidos

  
#### 3.4.1 Equipe de desenvolvimento

  
| | |
|----------|---------|
|**Representantes**| Julio César Schneider Martins <br /> João Vitor Lopes de Farias <br /> Mateus Gomes do Nascimento <br /> Denniel William Roriz Lima <br /> Rhuan Marques Róbias dos Santos <br />Edvan Barreira Gomes Junior <br /> Igor Guimarães Veludo <br /> João Pedro Mota Jardim <br /> Paulo Victor de Menezes Lopes|
| **Descrição** | Desenvolvedores |
| **Tipo** | Estudantes da Universidade de Brasília da disciplina de Métodos de Desenvolvimento de _Software_ (MDS) e Engenharia de Produto de Software.
| **Responsabilidades** | Desenvolvimento, implementação e testagem da aplicação. |
| **Critérios de Sucesso** | Entrega do _software_ com as funções requisitadas, implementadas e testadas dentro do prazo estipulado. |
| **Envolvimento** | Alto |
| **Comentários/Problemas** | |

  

#### 3.4.2 Equipe de gestão de projeto

| | |
|--|---|
|**Representantes** | Igor Guimarães Veludo <br /> João Pedro Mota Jardim <br /> Paulo Victor de Menezes Lopes |
|**Descrição** | Gerentes de Projeto |
|**Tipo** | Estudantes da Universidade de Brasília da disciplina de Engenharia de Produto de _Software_ (EPS)|
|**Responsabilidades** | Gerenciamento de metas e prazos como organização da equipe com fim de sucesso nos períodos propostos.|
|**Critérios de Sucesso** | Manter a equipe comprometida com o projeto, contribuir com o crescimento profissional da equipe de desenvolvimento, estabelecer um processo de desenvolvimento de _software_ bem definido e entregar o produto dentro do prazo, custo e nível de qualidade planejados. |
|**Envolvimento** | Alto |
|**Comentários/Problemas** | |


#### 3.4.3 Conecta Ensina

|  |  |  
|--|---|
|**Representantes**  |  
|**Descrição**  |  |
|**Tipo**  | Cliente de gerenciamento de aulas particulares |
|**Responsabilidades**  | Designar os principais requisitos e informações para o desenvolvimento da aplicação |
|**Critérios de Sucesso**  | Melhor gerenciamento das aulas particulares dos professores cadastrados e praticidade na contratação dos serviços de aulas particulares |
|**Envolvimento**  | Alto |
|**Comentários/Problemas**  |  |

### 3.5 Perfis dos usuários

#### 3.5.1 Professor

|  |  |  
|--|---|
| **Representantes**  | Professores |
| **Descrição**  | Pessoa que vai ser requisitado e dará as aulas |
| **Tipo**  | Usuário Informal |
| **Responsabilidades**  | Cadastrar no aplicativo, Confirmar aulas e disponibilidade de tempo |
| **Critérios de Sucesso**  | Lecionamento e encontro de forma a cumprir com os preços e aulas inicialmente negociados |
| **Envolvimento**  | Baixo |
| **Comentários/Problemas**  |  |

#### 3.5.2 Aluno

|  |  |  
|--|---|
|**Representantes**  | Alunos |
|**Descrição**  | Pessoa que vai procurar e contratar a aula |
|**Tipo**  | Usuário Informal |
|**Responsabilidades**  | Cadastrar no aplicativo, aquisição das aulas |
|**Critérios de Sucesso**  | Pagamento das aulas e Contratação das disciplinas de requisitadas |
|**Envolvimento**  | Baixo |
|**Comentários/Problemas**  |  |

#### 3.5.3 Administrador

|  |  |  
|--|---|
|**Representantes**  | Gerentes do aplicativo Conecta Ensina |
|**Descrição**  | |
|**Tipo**  | Administrador |
|**Responsabilidades**  | |
|**Critérios de Sucesso**  | |
|**Envolvimento**  | Médio |
|**Comentários/Problemas**  |  |



### 3.6 Principais necessidades dos usuários ou dos envolvidos

| Necessidades | Prioridade | Preocupações | Solução Proposta | Solução Atual |
|--------|--------|-------|------|--------|
| Praticidade na contratação das aulas | Alto | As contratações poderão ser feitas de formas intuitiva e prática ao usuário |  Layout de acesso do cliente e apresentando instruções simples e claras | Funcionalidades direta para o cliente em que ele escolherá a disciplina e apertará o botão para buscar professor|
| Diversidade nas disciplinas |Alto| Oferecimento de professores em maior áreas de conhecimento| Suporte ao sistema para cadastramento de professores de áreas de atuação do conhecimento diversas| sistema em que o administrador poderá adicionar uma disciplina que não estava cadastrada antes  |
| Localização das aulas procuradas |Alto| Ampla localidade tendo professores cadastrados em lugares diversos| Sistema em que irá localizar professores em uma devida área para o cliente  | Usar da localização do usuário para encontrar os professores próximos |

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
