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

