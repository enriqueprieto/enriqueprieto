---
authors: enriqueprieto
slug: criar-projeto-express
---

# Criar um projeto express

Olá pessoal, neste artigo eu vou criar um simples projeto express e compartilhar com você cada passo.

<!--truncate-->

## Sobre o express.js {#sobre-express}

Em minhas palavras, o `express.js` é um framework onde você pode criar servidores com requisições HTTP como `GET`, `POST`, `PUT` e `DELETE` usando `node.js`. Se você quer saber mais sobre o `express.js` (clique aqui)[https://expressjs.com] para visitar o site, lá você irá encontrar todos os recursos do framework.

## Project Setup {#project-setup}

### Start {#project-setup-start}

To start our project, let's create our folder.

```
mkdir express-project

cd express-project
```

Now, we need init the npm with the command below.

```
npm init
```

Answner all the npm prompt questions and then our `package.json` will created and look like that.

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

Now we can use the npm to install packages in our project, in this case we will install the `express.js`.

### Install express and dependencies {#project-setup-install-express-dependencies}

Inside our project let's install the express.

```
npm install express --save
```
Now we can configure our server and application express.

### Create application

Now we can create our application express. Let's create him in our `src` folder.
```
mkdir src

nano app.js
```

In our `app.js` we can define routes and responses by that route. Example:

```js
// ~/src/app.js

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    return res.send("<h1>Hello World</h1>");
});

module.exports = app;

```

### Create server

If you follow all steps above, you are already to create the `server` to our project. In your root folder, create a `server.js` file. He look's like that:

```js
const app = require('./src/app.js');
const http = requite(http);

const server = http.createServer(app);

server.listen(3000, function () {
    console.log('Listen from 3000 port.');
})

```

Now we can run the command in our terminal.

```
node server.js
```

Then, the prompt message will displayed for you and you can access the [localhost:3000](localhost:3000).

## Conclusion

Now we can save this project in our Github and use like template for new jobs required node.js and express. That's sounds good for productivitie.
