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
| 02/08/2020 | 0.10 | Ajuste Introdução e Posicionando | Denniel William | 
| 02/08/2020 | 0.11 | Ajuste Resumo dos Envolvidos e dos Usuários | Denniel William | 
| 03/08/2020 | 0.12 | Ajuste Perfis dos Envolvidos | Denniel William |  
| 03/08/2020 | 0.13 | Revisão do Documento | Denniel William, Edvan Gomes,  Rhuan Marques |
| 30/09/2020 | 1.0 | Revisão do Documento | Denniel William,  Rhuan Marques |

## Introdução

### Propósito

O propósito deste documento é expor as necessidades e funcionalidades do aplicativo Conecta Ensina onde o sistema será responsável pelo gerenciamento de aulas particulares, definindo os requisitos em termos das necessidades dos usuários finais.

### Escopo

O aplicativo permite a interação de dois tipos de usuário, sendo divididos em professores cadastrados e alunos para contratar os professores. Os alunos irão procurar as aulas, escolherão entre as disciplinas ofertadas e irão agendar um horário com um professor cadastrado, escolhendo entre aula online ou presencial.
Os professores terão acesso às aulas: pendentes, em que aceita pedidos de aula de alunos; marcadas, em que mostrarão a data de cada aula e realizadas, em que mostrarão as aulas realizadas pelo professor.Tendo também a funcionalidade para avaliação das aulas para alunos e professores.


### Visão geral

Este documento contém as características do _software_ a ser construído, sendo mostrado os problemas e mercado que levaram a sua criação e em como o aplicativo apresenta uma resolução. Sendo assim este documento irá abordar, respectivamente: as razões que influenciaram o desenvolvimento da aplicação, descrição dos envolvidos, sendo tratado no fim, os recursos do produto, suas funcionalidade e os requisitos utilizados para garantir sua qualidade.

## Posicionando

### Oportunidade de negócios 

O _software_ fornece praticidade e facilidade na contratação de aulas particulares podendo fazer isso de qualquer dispositivo Android, tornando-o, também, de fácil gerenciamento de aulas para os usuários e maior segurança pelo sistema de avaliações, em que proveem um _feedback_ das aulas particulares e dos usuários, sendo professores e alunos avaliados.

### Descrição do problema
|  |  | 
|---------------------|----------------------|
| **O problema seria** | dificuldade de gerenciamento de aulas particulares |
| **que afeta** | alunos e professores |
| **cujo impacto é** | a dificuldade de acesso e suporte ao conhecimento |
| **e uma boa solução seria** | uma aplicação em que estudantes poderiam ter mais acessibilidade e gestão para contratação de serviços |

### Sentença de posição do produto

Para o cliente que precisa de um _software_ de gerenciamento de aulas particulares, o Conecta Ensina é um aplicativo _mobile_ que traz o aprendizado de forma acessível e melhor gestão de aulas particulares. Diferente de meios de comunicação não desenvolvidos para esse objetivo e gestão autônoma dos usuários, nosso produto oferece uma forma interativa de contratação de aulas particulares e apoio a gestão dessas.

## Descrição dos envolvidos e do usuário

### Resumo dos envolvidos

  
| Nome | Descrição | Responsabilidade |
|------|-----------|------------------|
| Equipe de Desenvolvimento | Estudantes da Universidade de Brasília da disciplina "Métodos de Desenvolvimento de _Software_" e "Engenharia de Produção de _Software_. | Desenvolver e Implementar o _software_ descrito no documento |
| Equipe de Gestão de Projeto| Estudantes da Universidade de Brasília da disciplina "Engenharia de Produto de _Software_" | Desenvolvimento da aplicação, planejamento das etapas do projeto, verificação dos resultados e identificação de possíveis riscos. |
| Cliente | Conecta Ensina | Contato com o Product Owner para disponibilização de informações para os desenvolvedores do _software_ |

  

### Resumo dos usuários

 
| Nome | Descrição |
|------|-----------|
| Professores | Pessoa que irá se cadastrar no aplicativo e que será contratado para as aulas |
| Alunos | Pessoa em que irá procurar e contratar as aulas com base na disciplina |
| Administrador | Pessoa responsável por gerenciar o cadastro de professores |
   

### Ambiente do usuário
  
O _software_ será utilizado de dispositivos móveis que possuam o sistema operacional _Android_. O aparelho deverá ter a versão _Android_ igual ou superior a <versão  6.0>.

### Perfis dos envolvidos

#### Scrum Master

| | |
|----------|---------|
|**Representantes**| Paulo Victor de Menezes Lopes |
| **Descrição** | Scrum Master |
| **Tipo** | Estudante da Universidade de Brasília da disciplina de Engenharia de Produto de Software |
| **Responsabilidades** | Potencializar e facilitar o desenvolvimento e trabalho em equipe de todos os integrantes |
| **Critérios de Sucesso** | Equipe comprometida e desenvolvimento progrssivo da aplicação  |
| **Envolvimento** | Alto |
| **Comentários/Problemas** | Primeira vez desempenhando a função |

#### Product Owner

| | |
|----------|---------|
|**Representantes**| João Pedro Mota Jardim |
| **Descrição** | Product Owner  |
| **Tipo** | Estudante da Universidade de Brasília da disciplina de Engenharia de Produto de Software |
| **Responsabilidades** | Direcionar o projeto de acordo com os requisitos do cliente e contato frequente com o mesmo |
| **Critérios de Sucesso** | Transmissão clara do _feedback_ do cliente no processo de desenvolvimento do projeto |
| **Envolvimento** | Alto |
| **Comentários/Problemas** | Primeira vez desempenhando a função |

#### DevOps

| | |
|----------|---------|
|**Representantes**| Igor Guimarães Veludo |
| **Descrição** | DevOps |
| **Tipo** | Estudante da Universidade de Brasília da disciplina de Engenharia de Produto de Software |
| **Responsabilidades** | Otimizar a produtividade dos desenvolvedores e a confiabilidade das operaçãos |
| **Critérios de Sucesso** | Ambiente estável para os desenvolvedores |
| **Envolvimento** | Alto |
| **Comentários/Problemas** | Primeira vez desempenhando a função |

#### Equipe de desenvolvimento

| | |
|----------|---------|
|**Representantes**| Julio César Schneider Martins <br /> João Vitor Lopes de Farias <br /> Mateus Gomes do Nascimento <br /> Denniel William Roriz Lima <br /> Rhuan Marques Róbias dos Santos <br />Edvan Barreira Gomes Junior <br /> Igor Guimarães Veludo <br /> João Pedro Mota Jardim <br /> Paulo Victor de Menezes Lopes |
| **Descrição** | Desenvolvedores |
| **Tipo** | Estudantes da Universidade de Brasília da disciplina de Métodos de Desenvolvimento de _Software_ (MDS) e Engenharia de Produto de Software.
| **Responsabilidades** | Desenvolvimento, implementação e testagem da aplicação. |
| **Critérios de Sucesso** | Entrega do _software_ com as funções requisitadas, implementadas e testadas dentro do prazo estipulado. |
| **Envolvimento** | Alto |
| **Comentários/Problemas** | Pouco conhecimento da tecnologia utlizada para implementação |

#### Conecta Ensina

|  |  |  
|--|---|
|**Representantes**| Fábio e Carol |  
|**Descrição**  | Funcionários da empresa Conecta-Ensina |
|**Tipo**  | Cliente de gerenciamento de aulas particulares |
|**Responsabilidades**  | Designar os principais requisitos e informações para o desenvolvimento da aplicação |
|**Critérios de Sucesso**  | Melhor gerenciamento das aulas particulares dos professores cadastrados e praticidade na contratação dos serviços de aulas particulares |
|**Envolvimento**  | Alto |

### Perfis dos usuários

#### Professor

|  |  |  
|--|---|
| **Representantes**  | Professores |
| **Descrição**  | Pessoa a qual será requisitada e lecionará as aulas |
| **Tipo**  | Usuário Informal |
| **Responsabilidades**  | Cadastrar no aplicativo, confirmar aulas e disponibilidade de tempo |
| **Critérios de Sucesso**  | Lecionamento e encontro de forma a cumprir com os preços e aulas inicialmente negociados |
| **Envolvimento**  | Baixo |

#### Aluno

|  |  |  
|--|---|
|**Representantes**  | Alunos |
|**Descrição**  | Pessoa a qual contratará a aula |
|**Tipo**  | Usuário Informal |
|**Responsabilidades**  | Cadastrar no aplicativo, aquisição das aulas |
|**Critérios de Sucesso**  | Pagamento das aulas e contratação das disciplinas requisitadas |
|**Envolvimento**  | Baixo |

#### Administrador

|  |  |  
|--|---|
|**Representantes**  | Gerentes do aplicativo Conecta Ensina |
|**Descrição**  | Administrador |
|**Tipo**  | Administrador |
|**Responsabilidades**  | Gerenciamento de cadastro de professores |
|**Critérios de Sucesso**  | Contratos de professores aptos para lecionar as aulas |
|**Envolvimento**  | Médio |

### Principais necessidades dos usuários ou dos envolvidos

| Necessidades | Prioridade | Preocupações | Solução Proposta | Solução Atual |
|--------|--------|-------|------|--------|
| Praticidade na contratação das aulas | Alto | As contratações poderão ser feitas de formas intuitiva e prática ao usuário |  Layout de acesso do cliente e apresentando instruções simples e claras | Funcionalidades direta para o cliente em que ele escolherá a disciplina e apertará o botão para buscar professor|
| Diversidade nas disciplinas |Alto| Oferecimento de professores em maior áreas de conhecimento| Suporte ao sistema para cadastramento de professores de áreas de atuação do conhecimento diversas| sistema em que o administrador poderá adicionar uma disciplina que não estava cadastrada antes  |
| Localização das aulas procuradas |Alto| Ampla localidade tendo professores cadastrados em lugares diversos| Sistema em que irá localizar professores em uma devida área para o cliente  | Usar da localização do usuário para encontrar os professores próximos |


## Visão geral do produto
  

### Perspectiva do produto

  
O aplicativo Conecta Ensina oferece uma forma de contratação aulas particulares de maneira prática. Os usuários do aplicativo serão divididos entre: alunos, que irão cadastrar suas informações e poderão contratar as aulas através das disciplinas, e professores, que também farão um cadastro informando as disciplinas que lecionam, horários e datas disponíveis. As aulas serão contratadas pelos alunos e aceita pelos professores, abrindo, assim, um chat para comunicação entre os dois.

### Resumo das capacidades

  
| Benefícios para cliente | Recursos de suporte |
|-------------------------|--------------------|
| Interação direta entre professor e aluno | Mensagem privada entre aluno e professor após uma aula ter sido contratada. |
| Localidade e disponibilidade de aulas | Filtros que permitirão ao usuário escolher sua aula com base no seu horário,sendo também, os professores sendo filtrados pela localidade próxima do usuário.
| Praticidade na contratação de aulas | A contratação é feita toda pelo aplicativo que poderá ser baixado na _Play Store_. |
| Gestão dos dias de aulas contratadas | Calendário interativo mostrando os dias e horários das aulas contratadas. |

## Recursos do produto

### Aula

Função designada para contratar um professor no período mínimo de 48 horas e matéria escolhida pelo usuário e controlada pelo aplicativo.

### Aula Urgente

Função designada para o usuário contratar um professor anterior ao período de 48 horas estipulado como minimo nas aulas normais.

### Filtros

Função designada para a filtragem de professores com base no horário, disponibilidade e materias. 
 
### Calendário de Aulas

Página designada para mostrar aos usuários as aulas marcadas, para aluno como também para professor.

### Cadastro de usuários
 
Página designada para cadastro de novos usuários, distinguindo entre professores e alunos. Cada tipo de perfil cadastrado exige informações diferentes para concluir o cadastro.  
 
 
### Exibir perfil de professores
 
Este recurso mostra os perfis de usuários do tipo professor, exibindo ao mesmo informações necessárias do professor para solicitar um serviço, assim como outras informações relevantes como avaliações de outros alunos daquele professor.
 
 
### Exibir perfil de aluno
 
 
Este recurso é um recurso exclusivo dos usuários do tipo professor que foram solicitados para prestar um serviço. Mostra as informações relevantes do aluno e o tipo de serviço solicitado.
 
 
### Chat
 
Ferramenta que estabelece uma comunicação direta antes da aula entre aluno e professor, sendo assim possível combinar  especificações antes do encontro. Tal recurso só será liberado após a confirmação da aula.
 
 
### Avaliação dos usuários
 
Este recurso permite que o usuário avalie o aplicativo e suas funcionalidades. Permite também que o usuário reporte erros e bugs encontrados, além de sugerir melhorias.
 
 
### FAQ
 
Ferramenta responsável pelo contato inicial do usuário e as instruções básicas do produto, sendo implementada pelo uso de respostas de perguntas comumente feitas sobre a funcionalidade do programa.
 
 
### Formas de pagamentos
 
Permite que o usuário aluno escolha o melhor método de pagamento ao solicitar um professor.
 

## Restrições

### Restrições de design

Devido ao uso mobile, o software precisa se adaptar ao tamanho da tela do dispositivo do usuário, de forma a não utilizar muitos recursos do sistema, como bateria e memória.

### Restrições externas

A comunicação entre os usuários é um fator determinante para o bom funcionamento do aplicativo. Tal fator acaba sendo afetado por fatores externos: qualidade do sinal, abordagem dos usuários e integridade da bateria. 

### Restrições de implementação

O sistema será desenvolvido na linguagem _JavaScript_, utilizando um kit de desenvolvimento do React Native e do NodeJS. Além disso, o modelo arquitetural será o _MVC (Model - View - Controller)_. Outro fator delimitante é a baixa perícia técnica da equipe de desenvolvedores.

## Faixas de qualidade

### Requisitos do Sistema

O _software_ deve ser acessado de forma eficiente e estável por qualquer dispositivo android de versão < versão 6.0> ou superior. Sem prejudicar outros processos e funcionalidades do celular durante execução do Conecta Ensina.

### Requisitos de _design_

O _software_ deverá comportar um layout intuitivo e responsivo de forma a tornar fluida a experiência do usuário sem muito complexidade em seu uso, sendo agradável e podendo ser utilizado por qualquer usuário. 
 
### Requisitos de confiabilidade

As aulas e transações pela aplicação serão totalmente confiáveis, visto que o Conecta Ensina irá fazer transações entre o cliente e o professor para o gerenciamento e a contratação da aula, sendo assim dando a confiança para esse tipo de procedimento.

### Requisitos de desempenho

O sistema deve obter a localização do usuário quando o mesmo escolher a disciplina e procurar um professor durante a área, podendo o seu tempo variar pela número de professores mais próximos, contudo fazendo de forma eficiente e sempre atualizando a localização do aluno e do professor contratado. 


## Referencial bibliográfico

- https://github.com/fga-eps-mds/2016.2-MissaoNascente/wiki/Documento-de-Visão
- https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html
- https://fga-eps-mds.github.io/2019.1-MaisMonitoria/docs/doc-visao


