# EVA

![Снимок экрана (401)](https://user-images.githubusercontent.com/59142372/123420279-0c346a00-d5c4-11eb-9812-4a72c51ec4ce.png)
This is the login screen.

![Снимок экрана (402)](https://user-images.githubusercontent.com/59142372/123420808-b1e7d900-d5c4-11eb-97d2-6f9b45d63134.png)

To create an account.

![Снимок экрана (403)](https://user-images.githubusercontent.com/59142372/123421154-291d6d00-d5c5-11eb-8584-9d87bcffbf15.png)
Home Page.

![Снимок экрана (404)](https://user-images.githubusercontent.com/59142372/123421219-40f4f100-d5c5-11eb-8750-1bce05627eae.png)
Screen for creating a new student.

![Снимок экрана (405)](https://user-images.githubusercontent.com/59142372/123421766-f4f67c00-d5c5-11eb-999f-1418090e3822.png)
list all created students

![Снимок экрана (406)](https://user-images.githubusercontent.com/59142372/123421883-20796680-d5c6-11eb-8145-4d0302b94986.png)
search the student by name, surname, and Academic degree
![Снимок экрана (408)](https://user-images.githubusercontent.com/59142372/123422306-adbcbb00-d5c6-11eb-887c-18aaa3a792b3.png)
modal to eliminate a student
![Снимок экрана (409)](https://user-images.githubusercontent.com/59142372/123422510-fe341880-d5c6-11eb-8d88-963fa6562411.png)
edit a student's data

#How does EVA work ? ![🤔](https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1/16/1f914.png)

Eva- foi criada para ajudar na Gestão e Supervisão de Alunos da Comunidade Angolana localizada na Rússia, especificamente na cidade de Voronezh, e dá a possibilidade de listar todos os Alunos por País, Universidade, Corpo Docente, Dormitório, Quarto e etc.

How long was it developed? ![⏳](https://static.xx.fbcdn.net/images/emoji.php/v9/tb7/1/16/23f3.png)![😱](https://static.xx.fbcdn.net/images/emoji.php/v9/t2c/1/16/1f631.png)
O EVA foi desenvolvido ao longo de um período de 3 meses, começando em março de 2021.

To concrete what does EVA do? ? ![🥺](https://static.xx.fbcdn.net/images/emoji.php/v9/t9b/1/16/1f97a.png)![🙇🏽‍♂️](https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/16/1f647_1f3fd_200d_2642.png)

O EVA foi desenvolvido com o intuito de auxiliar departamentos de empresas ou universidades muito distantes, facilitando o compartilhamento de dados de alunos ou funcionários entre esses departamentos com velocidade recorde de sincronização de dados.
[#Exemplo](https://www.facebook.com/hashtag/exemplo?__eep__=6&__cft__[0]=AZX6fmDfplTgnj9VuCFfdK6uWr2OUndlznmWIvDnmz2XUshNJ22IbvDW7Z2NVpv_6dHzPcyHWySEXTMegL-mLuHSSbfUsjvoYEH00FoN-n0IthVMc0ARmMBNMfPPUGCXcsA4EoPdCbKgFJrsrfaxtKeH&__tn__=*NK-R) de Funcionamento:

We have the UAN university in Angola ! ![🇦🇴](https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1/16/1f1e6_1f1f4.png), que é a sede da universidade, e outro departamento próximo aos Mártires ou Aeroporto Internacional, desta forma se um funcionário universitário solicitar os dados de um aluno que foi transferido do Campus Universitário para estes departamentos, através de um clique ou digitando o nome de o aluno, todos os dados vinculados ao aluno serão mostrados. E se no Campus outro funcionário editar os dados do aluno, em segundos essas alterações serão mostradas ao departamento localizado em Mártires.

<h1 align="center">EVA App</h1>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Docker](https://www.docker.com/)
- [TypeORM](https://typeorm.io/#/)
- [Heroku](https://id.heroku.com/login)
- [Amazon AWS s3](https://signin.aws.amazon.com/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/iamrosada/eva>

# Acesse a pasta do projeto no terminal/cmd
$ cd server


# Instale as dependências
$ npm install ou simplesmente yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# Acesse o arquivo .env do projeto e preencha com os dados do AWS S3 Amazon .
$AWS_ACCESS_KEY_ID=
$AWS_SECRET_ACCESS_KEY=
$AWS_DEFAULT_REGION=

Acesse a pasta config que esta dentro da pasta src, abre o arquivo multer.ts, vai até a linha 26,e altera o bucket, caso
estiveres a trabalhar online coloca o nome do bucket da AWS que criaste. caso for local podes escrever local.
```

### 🎲 Deploy: Rodando o Back End (servidor no Heroku)

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Execute o seguinte comando no terminal/cmd para gerar o dist
$ yarn build

# Acesse a Tua conta no heroku e faz o deploy
# guarda o link do servidor para usar no front end.

```

### 🎲 Rodando o Front End (Aplicativo desktop)

```bash
# Clone este repositório
$ git clone <https://github.com/iamrosada/eva>

# Acesse a pasta do projeto no terminal/cmd
$ cd desktopPortugues


# Instale as dependências
$ npm install ou simplesmente yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn build

```

### 🎲 Gerando o executável AP.exe (Aplicativo desktop)

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd desktopPortugues

# Acesse a pasta server, no arquivo api.js coloca o link do backend que fizeste deploy.

# Execute o seguinte comando no terminal/cmd para gerar o dist e build folder
$ yarn build

# Depois de finalizar, abre a pasta dist e terá um arquivo com o nome EVA.exe, clica no mesmo e permita que ele seja instalado no teu PC.
```

### Autor

---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/59142372?v=4" width="100px;" alt=""/>
 <br />

Feito com ❤️ por Luis de Água Rosada 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@iamrosada_-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/iamrosada_)](https://twitter.com/iamrosada_)
[![Gmail Badge](https://img.shields.io/badge/-luisrosada@mail.ru-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luisrosada@mail.ru)](mailto:luisrosada@mail.ru)
