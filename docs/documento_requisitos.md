## Especificação de Requisitos de Software

### 1. Introdução

Este documento registra os requisitos detalhados do 'Sistema de gerenciamento de projetos e membros da Mega Júnior', na forma de requisitos textuais do produto.

### 2. Classes de usuários

- **Diretor** : Usuário com permissão de nível gerencial; Pode cadastrar novos usuários no sistema e gerenciar os cargos de cada usuário.
- **Gerente de Projetos** :  Usuário responsável pela criação e gerenciamento de projetos; Pode adicionar ou remover usuários que estão participando em cada projeto.
- **Membro** : Usuário comum do sistema; Precisa ser cadastrado pelo diretor; Pode ser alocado em projetos.

### 3. Definição de conceitos

**Projeto** - Empreendimento que está sendo desenvolvido pela empresa e que requer mobilização de recursos humanos e financeiros e gestão de tempo. Cada projeto está sobre responsabilidade de um gerente de projetos. Projetos podem ser de acesso público ou de acesso restrito, isto é, de acesso à todos os membros, ou de acesso apenas aos membros relacionados ao projeto, respectivamente.

**Tarefa** : Atividade desempenhada no decorrer da execução de um projeto. Dizemos que a atividade pertence a um determinado projeto. Toda tarefa tem um responsável que pode ser qualquer usuário do sistema.

**Acessar o sistema** : Entende-se por acessar o sistema, o ato de efetuar autenticação, por meio de identificador e senha, para garantir que o usuário de fato existe no sistema e qual é sua classe de usuário.


### 4. Requisitos de Software

Nesta seção são descritos os requisitios do produto em formato de estórias de usuário. 

| Identificador | Estória | Critério de Satisfação |
|---------------|---------|------------------------|
| H-01 | Como usuário eu gostaria de acessar o sistema a fim de ter acesso às funcionalidades do sistema. | O usuário consegue acessar o sistema por meio de identificador e senha; O usuário tem acesso apenas às funcionalidades permitidas à sua classe de usuário. |
| H-02 | Como membro eu gostaria de visualizar uma lista dos projetos da empresa a fim de verificar quais empreendimentos estão em andamento. | O usuário consegue visualizar todos os projetos públicos e restritos em que está colaborando;  O usuário não consegue editar nenhum dos projetos. |
| H-03 | Como membro eu gostaria de visualizar os detalhes de um projeto a fim de verificar as informações do projeto e a necessidade de colaboradores. | O usuário consegue visualizar detalhadamente um projeto público ou restrito do qual está colaborando; O usuário não consegue editar nenhuma informação do projeto.|
| H-04 | Como gerente de projetos eu gostaria de criar novos projetos a fim de registrar nova atividade que está sendo desenvolvida pela empresa. | O usuário consegue criar um novo projeto; O usuário passa a ser responsável pelo projeto criado. |
| H-05 | Como gerente de projetos eu gostaria de adicionar ou remover membros que estão colaborando com um projeto a fim de garantir a rastreabilidade dos projetos da empresa. | O usuário é capaz de adicionar ou excluir membros de um projeto sobre o qual é responsável. |
| H-06 | Como gerente de projetos eu gostaria de manipular as informações de um projeto a fim de garantir a corretude dos detalhes do empreendimento após mudanças decorrentes do desenvolvimento. | O usuário é capaz de editar todas as informações de um projeto sobre o qual é responsável.
| H-07 | Como diretor eu gostaria de cadastrar novos usuários no sistema a fim de que os novos usuários tenham acesso as funcionalidades do sistema. | O usuário consegue cadastrar novos membros ou gerentes de projetos; Os novos usuários passam a ter acesso ao sistema.|