---
authors: enriqueprieto
slug: criar-projeto-express
---

# Criar um projeto express

Olá pessoal, neste artigo eu vou criar um simples projeto express e compartilhar com você cada passo.

<!--truncate-->

## Sobre o express.js {#sobre-express}

Em minhas palavras, o `express.js` é um framework onde você pode criar servidores com requisições HTTP como `GET`, `POST`, `PUT` e `DELETE` usando `node.js`. Se você quer saber mais sobre o `express.js` (clique aqui)[https://expressjs.com] para visitar o site, lá você irá encontrar todos os recursos do framework.

## Configurar o projeto {#project-setup}

### Início {#project-setup-start}

Para iniciar nosso projeto, vamos criar nossa pasta.

```
mkdir express-project

cd express-project
```

Agora, nós precisamos iniciar o npm com o comando abaixo.

```
npm init
```

Responda todas perguntas que aparecer no terminal e então nosso `package.json` será criado e vai ser parecido com o exemplo abaixo.

```JSON
//package.json

{
    "name": "express-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
}

```

Agora nós podemos usar o `npm` para instalar pacotes em nosso projeto, neste caso nós vamos instalar o `express.js`.

### Instalando o express {#project-setup-install-express-dependencies}

Dentro de nosso projeto vamos instalar o express.

```
npm install express --save
```

Agora nós podemos configurar nosso `server` e nossa aplicação express.

### Criando aplicação

Agora nós podemos criar nossa aplicação express. Vamos criá-lo em nossa pasta `src`.

```
mkdir src

nano app.js
```

Em nosso `app.js` nós podemos definir rotas e seus retornos. Exemplo:

```js
// ~/src/app.js

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    return res.send("<h1>Hello World</h1>");
});

module.exports = app;

```

### Criando server

Se você seguiu todos os passos acima, você está pronto para criar o `server` para seu projeto. Em nossa pasta `root`, crie um arquivo chamado `server.js`. Ele vai parecer assim:

```js
const app = require('./src/app.js');
const http = requite(http);

const server = http.createServer(app);

server.listen(3000, function () {
    console.log('Listen from 3000 port.');
})

```
Agora podemos rodar o comando em nosso terminal.

```
node server.js
```

Pronto, uma mensagem no terminal vai aparecer e você poderá acessar [localhost:3000](localhost:3000).

## Conclusão

Agora podemos salvar este projeto em nosso Github e usar como um template para novos trabalhos que requer node.js e express. Isso é muito bom para produtividade.
